import { ReactNode } from 'react'

export interface IViewProps {
  children: ReactNode | string
  loading?: boolean
  disabled?: boolean
  height?: number
  onClick?: () => void | string | promise
  outline?: boolean
  secondary?: boolean
  width?: number
  widthFull?: boolean
  cursor?: 'pointer'
  type?: 'reset' | 'submit' | 'button'
  buttonTextColor?: string
  bgColor?: string
  borderRadius?: number
}

export interface IStyleProps {
  height: number
  width: number
  widthFull: boolean
  bgColor?: string
  borderRadius?: number
  buttonTextColor?: string
  outline?: boolean
  cursor?: 'pointer'
}
