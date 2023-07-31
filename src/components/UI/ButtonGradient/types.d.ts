import { ReactNode } from 'react'

export interface IViewProps {
  children: ReactNode | string
  loading?: boolean
  disabled?: boolean
  height?: number
  onClick?: () => void | string | Promise
  outline?: boolean
  secondary?: boolean
  width?: number
  widthFull?: boolean
  cursor?: 'pointer'
  type?: 'reset' | 'submit' | 'button'
  borderRadius?: number
}

export interface IStyleProps {
  height: number
  width: number
  widthFull: boolean
  borderRadius?: number
  bgColor?: string
  buttonTextColor?: string
  outline?: boolean
  cursor?: 'pointer'
}
