<script setup lang="ts">
import { usePrefixCls } from '@/hooks';
import ToggleDark from '../switch/toggleDark.vue';
const headerCLs = usePrefixCls('header')
</script>

<template>
  <header class="flex justify-between items-center px-3" :class="[headerCLs]">
    <div></div>
    <div>
      <ToggleDark />
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/scss/var/variable.scss' as var;

.#{var.$prefixCls}-header {
  --header-shadow: rgb(229, 230, 235);
  height: 60px;
  box-shadow: 0 1px 0 var(--header-shadow);
}

.dark .#{var.$prefixCls}-header {
  --header-shadow: rgb(72, 72, 73);
}
</style>