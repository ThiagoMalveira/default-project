import { useAppSelector } from '@hooks/store'

const useIsAuthenticated = () => {
  const { credentials } = useAppSelector((state) => state.auth)

  const isAuthenticated = Boolean(credentials)

  return { isAuthenticated }
}

export default useIsAuthenticated
