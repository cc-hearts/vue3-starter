<script setup lang="ts">
import { githubUrl } from '@/configs'
import { defineCssNamespace } from '@/hooks'
import { GithubIcon } from '@/icons'
import SwitchTheme from './switch-theme.vue'

const cssNs = defineCssNamespace('header')

const toGithub = () => githubUrl && window.open(githubUrl)
</script>

<template>
  <header
    class="flex justify-between items-center px-3 shrink-0"
    :class="[cssNs.cls]"
  >
    <slot name="left">
      <div></div>
    </slot>
    <div class="flex text-2xl items-center" :class="[cssNs.e('icon')]">
      <slot name="right-icon"></slot>
      <GithubIcon @click="toGithub" />
      <SwitchTheme />
    </div>
  </header>
</template>

<style lang="scss">
@use '@/assets/scss/variables/variable.scss' as *;
@use '@/assets/scss/mixins/bem.scss' as *;
@use '@/assets/scss/functions/variable.scss' as *;

@include b('header') {
  height: 60px;
  box-shadow: 0 1px 0 getCssVar('colorFill');

  &__icon {
    color: getCssVar('colorTextSecondary');

    & > div,
    & > button,
    & > svg {
      margin: 0 0.5rem;
    }

    svg {
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: getCssVar('colorText');
      }
    }
  }
}
</style>
