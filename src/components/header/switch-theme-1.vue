<script setup lang="ts">
import Icons from '@/components/icon/icon.vue'
import { useToggleTheme } from '@/hooks'

function handleToggleTheme() {
  useToggleTheme()
}
</script>

<template>
  <div class="relative cursor-pointer" @click="handleToggleTheme">
    <Icons
      name="sun-1"
      class="h-5 w-5 scale-100 rotate-0 transition-transform duration-500 dark:scale-0 dark:-rotate-90"
    />
    <Icons
      name="moon-1"
      class="absolute top-0 h-5 w-5 scale-0 rotate-90 transition-transform duration-500 dark:scale-100 dark:rotate-0"
    />
  </div>
</template>
