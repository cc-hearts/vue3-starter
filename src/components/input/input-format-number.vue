<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue'
import { ref, watchEffect, onMounted } from 'vue'

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
})

const inputRef = ref<HTMLInputElement | null>(null)
const internalValue = ref('')

onMounted(() => {
  watchEffect(() => {
    formatVal(String(props.value))
  })
})

function handleInputChange(e: Event) {
  if (e instanceof InputEvent) {
    const type = e.inputType
    const lastCode = e.data
    switch (type) {
      case 'insertText':
        if (lastCode && /[0-9.]/.test(lastCode)) {
          internalValue.value += lastCode
        }
        break
      case 'deleteSoftLineBackward':
      case 'deleteContentBackward':
        internalValue.value = (e.target as InputHTMLAttributes).value
        break
      case 'insertFromPaste': {
        const code = inputRef.value!.value
        const value = code
          .split('')
          .filter((c) => /[0-9.]/.test(c))
          .join('')
        formatVal(value)
        break
      }
      case 'deleteByCut':
        internalValue.value = ''
        break
    }
    if (type !== 'insertFromPaste') formatVal(internalValue.value)
  }
}
function formatVal(formatValue: string) {
  let value = formatValue.split(',').join('')
  const reg = value.includes('.')
    ? /(?!^)(?=(\d{3})+\.)/g
    : /(?!^)(?=(\d{3})+$)/g
  value = value.replace(reg, ',')
  internalValue.value = value
  if (inputRef.value) {
    inputRef.value!.value = value
  }
}
</script>

<template>
  <input
    ref="inputRef"
    class="input-format-number"
    @input="handleInputChange"
  />
</template>

<style lang="scss">
.input-format-number {
  border: 1px solid;
}
</style>
