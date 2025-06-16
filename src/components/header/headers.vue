<script setup lang="ts">
import { githubUrl } from '@/configs'
import { defineCssNamespace } from '@/hooks'
import Icons from '@/components/icon/icon.vue'
import SwitchTheme1 from './switch-theme-1.vue'

const cssNs = defineCssNamespace('header')

const toGithub = () => githubUrl && window.open(githubUrl)
</script>

<template>
  <header
    class="flex shrink-0 items-center justify-between px-3"
    :class="[cssNs.cls]"
  >
    <slot name="left">
      <div />
    </slot>
    <div class="flex items-center text-2xl" :class="[cssNs.e('icon')]">
      <slot name="right-icon" />
      <Icons name="github" @click="toGithub" />
      <SwitchTheme1 />
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/scss/override.scss' as *;
@use '@/assets/scss/theme.scss' as *;

.#{$namespace}-header {
  height: 60px;
  box-shadow: 0 1px 0 getCssVar('colorFill');

  &__icon {
    color: getCssVar('colorTextSecondary');

    & > div,
    & > button,
    & > svg {
      margin: 0 0.5rem;
    }
  }
}
</style>
