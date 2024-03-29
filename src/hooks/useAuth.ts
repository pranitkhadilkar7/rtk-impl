import { selectLogin } from '../pages/login/login-slice'
import { useAppSelector } from '../store/hooks'

export function useAuth() {
  const { user } = useAppSelector(selectLogin)

  return { isLoggedIn: !!user }
}
