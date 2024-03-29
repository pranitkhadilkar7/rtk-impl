import { configureStore } from '@reduxjs/toolkit'
import { applicationApi } from './service'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginReducer } from '../pages/login/login-slice'
import { middleware } from './middleware'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    [applicationApi.reducerPath]: applicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(applicationApi.middleware, middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
