import { useAppSelector } from '@hooks/store'

const Home = () => {
  const userDetail = useAppSelector((state) => state.userDetail)

  return {
    userDetail,
  }
}

export default Home
