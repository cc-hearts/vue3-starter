import { defaultNamespace } from '@/configs/constants'
import { generateCssNamespaceFn } from '@cc-heart/utils-client'

export const defineCssNamespace = generateCssNamespaceFn(defaultNamespace)
