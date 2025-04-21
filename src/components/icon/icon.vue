<script setup lang="ts">
import SvgIcon from '~virtual/svg-component'
import type { IconProps } from '@/types/icon'

withDefaults(defineProps<IconProps>(), {})
</script>

<template>
  <SvgIcon class="icons" :name="name" />
</template>

<style lang="scss">
.icons {
  width: 1em;
  height: 1em;
  color: currentColor;
  background-color: transparent;
}
</style>
