import { getTheme } from '@/storage'
import { useTheme } from '../hooks/use-theme'
import { THEME } from '@/configs'

export function initTheme() {
  if (typeof document !== 'undefined') {
    const transition = document.body.style.transition
    document.body.style.transition = 'none'
    const [_, setThemeRef] = useTheme()
    setThemeRef(getTheme() === THEME.DARK ? THEME.DARK : THEME.LIGHT)
    document.body.offsetHeight
    document.body.style.transition = transition
  }
}
