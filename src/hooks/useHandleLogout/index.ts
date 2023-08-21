import { useHandleNavigate } from '@hooks/useHandleNavigate'
import PathRoutes from '@route/PathRoutes'
import { clearStorage, clearStore } from '@store/index'
import { useCallback } from 'react'

const useHandleLogout = () => {
  const { handleNavigate } = useHandleNavigate()

  const handleLogout = useCallback(async (): Promise<void> => {
    await clearStorage()
    clearStore()

    handleNavigate(PathRoutes.HOME)
  }, [handleNavigate])

  return { handleLogout }
}

export default useHandleLogout
