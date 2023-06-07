import { isDark } from '@/configs'
import { getTheme } from '@/storage'
export function useInitTheme() {
  if (typeof document !== 'undefined') {
    const classList = document.documentElement.classList
    const transition = document.body.style.transition
    document.body.style.transition = 'none'
    isDark.value = getTheme() === 'dark'
    isDark.value ? classList.add('dark') : classList.remove('dark')
    document.body.offsetHeight // 回流
    document.body.style.transition = transition
  }
}
