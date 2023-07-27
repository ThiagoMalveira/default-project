import { useNavigate } from 'react-router-dom'

import { useAppSelector } from '@hooks/store'
import PathRoutes from '@route/PathRoutes'

export const useHeader = () => {
  const navigate = useNavigate()

  const userDetail = useAppSelector((state) => state.userDetail)

  const signOut = () => {
    navigate(PathRoutes.SIGN_OUT)
  }

  return {
    userDetail,
    signOut,
  }
}
