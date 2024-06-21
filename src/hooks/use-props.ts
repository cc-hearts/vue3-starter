import type { ComputedRef } from 'vue'
import { computed, getCurrentInstance } from 'vue'

export function useProps<T>(name: string): ComputedRef<T | undefined> {
  const vm = getCurrentInstance()
  return computed(() => (vm?.proxy?.$props as any)?.[name])
}
