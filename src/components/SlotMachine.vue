<script setup lang="ts">
import { computed, ref, nextTick, defineExpose } from 'vue'
import { Motion } from 'motion-v'

interface Props {
  numbers: number[]
  target: number
  duration?: number
  repeat?: number
}

const props = defineProps<Props>()
const duration = props.duration ?? 6
const repeat = props.repeat ?? 12
const isRolling = ref(false)
const currentTarget = ref(props.target)
const currentRepeat = ref(repeat)
const motionKey = ref(0)

const columns = computed(() => {
  const arr = []
  for (let i = 0; i < 1; i++) {
    const col = []
    for (let r = 0; r < currentRepeat.value; r++) {
      col.push(...props.numbers)
    }
    if (isRolling.value) {
      col.push(currentTarget.value)
    }
    arr.push(col)
  }
  return arr
})

const getTargetOffset = (colIdx: number) => {
  const col = columns.value[colIdx]
  const itemHeight = 40
  const targetIdx = col.lastIndexOf(currentTarget.value)
  return targetIdx * itemHeight
}

function start() {
  isRolling.value = true
  currentRepeat.value = repeat * 2
  currentTarget.value = props.target
  motionKey.value++
}

function stop(target?: number) {
  currentTarget.value = target ?? props.target
  currentRepeat.value = repeat
  nextTick(() => {
    motionKey.value++
  })
  setTimeout(() => {
    isRolling.value = false
    currentRepeat.value = 1
    motionKey.value++
  }, duration * 1000)
}

defineExpose({ start, stop })
</script>

<template>
  <div class="slot-machine">
    <div class="slot-window">
      <div v-for="(col, idx) in columns" :key="idx" class="slot-column">
        <Motion
          :key="motionKey"
          :initial="{ y: 0 }"
          :animate="isRolling ? { y: -getTargetOffset(idx) } : { y: 0 }"
          :transition="{ duration, ease: 'easeInOut' }"
        >
          <div class="slot-items">
            <div v-for="(num, nIdx) in col" :key="nIdx" class="slot-item">
              {{ num }}
            </div>
          </div>
        </Motion>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slot-machine {
  display: flex;
  justify-content: center;
  align-items: center;
}
.slot-window {
  overflow: hidden;
  height: 40px;
  width: 50px;
  border: 2px solid #ccc;
  border-radius: 8px;
  background: #fff;
  display: flex;
}
.slot-column {
  width: 100%;
  height: 100%;
}
.slot-items {
  display: flex;
  flex-direction: column;
}
.slot-item {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
