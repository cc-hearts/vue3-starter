<script setup lang="ts">
import { Toaster } from '@/ui/sonner'
import 'vue-sonner/style.css'
</script>

<template>
  <RouterView />

  <Toaster />
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: rgb(13, 148, 136);
  opacity: 0.75;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
</style>
