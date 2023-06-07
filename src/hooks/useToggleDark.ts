import { THEME, isDark } from '@/configs'
import { setTheme } from '@/storage'
export function useToggleDark() {
  const el = document.documentElement
  const token = el.classList
  const hasDarkClassName = token.contains(THEME.DARK)
  if (hasDarkClassName) {
    token.remove(THEME.DARK)
  } else {
    token.add(THEME.LIGHT)
  }
  isDark.value = !isDark.value
  setTheme(isDark.value ? THEME.DARK : THEME.LIGHT)
}
