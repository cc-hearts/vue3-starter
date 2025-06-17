<script setup lang="ts">
import {
  useWarningMsg,
  useSuccessMsg,
  useErrorMsg,
  useInfoMsg,
} from '@/components/message'
import { Button } from '@/ui/button'

const open1 = () => {
  useSuccessMsg('This is a success message.')
}
const open2 = () => {
  useWarningMsg('This is a warning message.')
}
const open3 = () => {
  useErrorMsg('This is a error message.')
}
const open4 = () => {
  useInfoMsg('This is a info message.')
}
</script>

<template>
  <Button :plain="true" @click="open2"> Success </Button>
  <Button :plain="true" @click="open3"> Warning </Button>
  <Button :plain="true" @click="open1"> Message </Button>
  <Button :plain="true" @click="open4"> Error </Button>
</template>
