export const defaultNamespace = 'cc'
export const THEME_KEY = 'theme'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const __IS_DEV__ = import.meta.env.MODE === 'development'
export const __IS_TEST__ = import.meta.env.MODE === 'test'
export const __IS_PROD__ = import.meta.env.MODE === 'production'

export const githubUrl = 'https://github.com/cc-hearts/vue3-starter.git'
