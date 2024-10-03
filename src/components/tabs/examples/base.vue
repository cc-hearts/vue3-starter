<script setup>
import { reactive, ref } from 'vue'
import Tabs from '../tabs.vue'
const tabsProps = reactive({
  columns: [
    { text: 'user' },
    { text: 'config' },
    { text: 'role' },
    { text: 'task' },
  ],
})
</script>

<template>
  <div>
    <Tabs v-bind="tabsProps" />
  </div>
</template>
