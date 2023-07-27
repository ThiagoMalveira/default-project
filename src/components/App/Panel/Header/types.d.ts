export interface IViewProps {
  userDetail: {
    id: string
    username: string
    isActive: boolean
  }
  signOut: () => void
}

export interface IProps {
  [name: string]: string
}
