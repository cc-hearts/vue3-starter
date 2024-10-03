<script setup lang="ts">
import { ref, reactive } from 'vue'
import Tabs from '../tabs.vue'
const active = ref(2)
const slotTabsProps = reactive({
  columns: [
    { slot: { name: 'user' } },
    { text: 'config' },
    { text: 'role' },
    { text: 'task' },
  ],
})
</script>

<template>
  <Tabs v-bind="slotTabsProps" v-model:active="active">
    <template #user>
      <i>123213</i>
    </template>
  </Tabs>
</template>
