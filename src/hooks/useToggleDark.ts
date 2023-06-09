import { THEME, isDark } from '@/configs'
import { setTheme } from '@/storage'
export function useToggleDark() {
  const el = document.documentElement
  const token = el.classList
  const hasDarkClassName = token.contains(THEME.DARK)
  token[hasDarkClassName ? 'remove' : 'add'](THEME.DARK)
  isDark.value = !isDark.value
  setTheme(isDark.value ? THEME.DARK : THEME.LIGHT)
}
