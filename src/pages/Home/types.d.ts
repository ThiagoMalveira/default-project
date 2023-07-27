export type IViewProps = {
  handleNavigate: (item) => void
  userDetail: {
    id: string
    username: string
    isActive: boolean
  }
}
