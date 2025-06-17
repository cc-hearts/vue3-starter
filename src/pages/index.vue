<script setup lang="ts">
import { Button } from '@/ui/button'
import { toast } from 'vue-sonner'
</script>

<template>
  <div>
    <h1 class="py-4">home page</h1>
    <Button class="cursor-pointer"> 123 </Button>

    <Button
      variant="outline"
      @click="
        () => {
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
          })
        }
      "
    >
      Add to calendar
    </Button>
  </div>
</template>
