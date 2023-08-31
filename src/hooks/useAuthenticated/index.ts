import { useAppSelector } from '@hooks/store'

const useAuthenticated = () => {
  const { credentials } = useAppSelector((state) => state.auth)

  const Authenticated = !credentials === false

  return { Authenticated }
}

export default useAuthenticated
