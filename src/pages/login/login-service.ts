import { applicationApi } from '../../store/service'
import { LoginForm } from './login-type'

const loginService = applicationApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, LoginForm>({
      query: (payload) => ({
        url: '/auth/login',
        body: payload,
        method: 'POST',
      }),
      invalidatesTags: (result, error, arg) => {
        if (!error) return ['RELEASE']
        return []
      },
    }),
  }),
})

export const { useLoginMutation } = loginService
