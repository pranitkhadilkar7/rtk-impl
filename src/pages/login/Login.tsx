import { useAppDispatch } from '../../store/hooks'
// import { useLoginMutation } from './login-service'
import { loginUser } from './login-slice'

export function Login() {
  const dispatch = useAppDispatch()
  // const [login, {}] = useLoginMutation()

  return (
    <div className="tw-flex tw-flex-row tw-justify-around tw-mt-3">
      <button
        className="tw-bg-blue-500 tw-text-white tw-px-5 tw-py-2 tw-rounded-xl"
        onClick={() => {
          dispatch(loginUser({ email: 'test@test.com', password: 'password' }))
          // login({ email: 'testwww@test.com', password: 'password' })
        }}
      >
        Login
      </button>
    </div>
  )
}
