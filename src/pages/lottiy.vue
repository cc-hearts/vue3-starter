<script setup>
import SlotMachine from '@/components/SlotMachine.vue'

const slotRef = ref()
const start = () => {
  slotRef.value.start()
}
</script>

<template>
  <div>
    <h1>抽奖</h1>
    <SlotMachine
      ref="slotRef"
      :numbers="[123, 456, 789, 234, 567]"
      :target="789"
    />
    <button @click="start">开始</button>
    <!-- <button @click="stop">停止</button> -->
  </div>
</template>
