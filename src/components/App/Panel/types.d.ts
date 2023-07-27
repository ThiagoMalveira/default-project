import { ReactNode } from 'react'

export interface IProps {
  children: ReactNode
}

export type IViewProps = {
  userDetail: {
    id: string
    username: string
    isActive: boolean
  }
  children: ReactNode
}
