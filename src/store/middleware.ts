import { Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const middleware: Middleware = (api) => (next) => (action: any) => {
  const message = action?.payload?.message || action?.payload?.data?.message
  if (message) {
    switch (true) {
      case action?.type?.includes('fulfilled'):
        toast.success(message)
        break
      case action?.type?.includes('rejected'):
        toast.error(message)
        break
      default:
        break
    }
  }
  console.log(action)
  const response = next(action)
  return response
}
