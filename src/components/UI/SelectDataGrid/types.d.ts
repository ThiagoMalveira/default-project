import { ChangeEvent } from 'react'

export interface IProps {
  inputWidth?: number
  inputHeight?: number
  list: any[]
  value: string
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  textAlign?: string
  textColor?: string
  backgroundColor?: string
  textTransform?: string
  labelTop?: string
  labelColor?: string

  marginInputTop?: number
}

export interface IStyle {
  textAlign: string
  backgroundColor: string
  textTransform: string
  textColor?: string
  backgroundColor?: string
  placeholderColor?: string
  borderColor?: string
  inputWidth: number
  inputHeight: number
}

export type IStyleProps = {
  value: string
}
