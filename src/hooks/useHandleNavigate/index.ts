import { useNavigate } from 'react-router-dom'

export const useHandleNavigate = () => {
  const navigate = useNavigate()

  const handleNavigate = (item: string) => {
    navigate(item)
  }
  return { handleNavigate }
}
