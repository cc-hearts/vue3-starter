export const defaultNamespace = 'cc'
export const THEME_KEY = 'theme'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export const __IS_DEV__ = process.env.NODE_ENV === 'development'
export const __IS_PROD__ = process.env.NODE_ENV === 'production'

export const githubUrl = 'https://github.com/cc-hearts/vue3-starter.git'
