<script lang="ts" setup>
import { reactive } from 'vue'
import Tabs from '../tabs.vue'

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
  <div>
    <Tabs v-bind="slotTabsProps">
      <template #user>
        <i>123213</i>
      </template>
    </Tabs>
  </div>
</template>
