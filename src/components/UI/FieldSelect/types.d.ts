import { ChangeEvent } from 'react'

export interface IProps {
  inputWidth?: number
  inputHeight?: number
  list: Segmento[]
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
  textAlign?: string
  textColor?: string
  backgroundColor?: string
  textTransform?: string
  labelTop?: string
  labelColor?: string

  marginInputTop?: number
}

export type Segmento = {
  segmentoId: number
  segmentoNome: string
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
