import type { ExternalToast } from 'vue-sonner'
import { toast } from 'vue-sonner'

const [useSuccessMsg, useWarningMsg, useErrorMsg, useInfoMsg] = (
  ['success', 'warning', 'error', 'info'] as const
).map((type) => {
  return function (message: string, duration = 3000, opts: ExternalToast = {}) {
    toast[type](message, {
      duration,
      richColors: true,
      position: 'top-right',
      ...opts,
    })
  }
})

export { useSuccessMsg, useWarningMsg, useErrorMsg, useInfoMsg }
