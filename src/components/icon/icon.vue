<script setup lang="ts">
import type { IconProps } from '@/types/icon'

withDefaults(defineProps<IconProps>(), {})
</script>

<template>
  <svg class="icons" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<style lang="scss">
.icons {
  width: 1em;
  height: 1em;
  color: currentColor;
  background-color: transparent;
}
</style>
