import { useHandleNavigate } from '@hooks/useHandleNavigate'

const useHome = () => {
  const { handleNavigate } = useHandleNavigate()

  return {
    handleNavigate,
  }
}

export default useHome
