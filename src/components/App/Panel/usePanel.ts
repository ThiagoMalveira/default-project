import { useAppSelector } from '@hooks/store'

export const usePanel = () => {
  const userDetail = useAppSelector((state) => state.userDetail)

  return { userDetail }
}
