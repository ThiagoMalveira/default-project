export interface IProps {
  inputWidth?: number
  inputHeight?: number
  list: Segmento[]
  onChange?: (value: string) => void
  textAlign?: string
  textColor?: string
  backgroundColor?: string
  textTransform?: string
  labelTop?: string
  labelColor?: string

  marginInputTop?: number
}

export type Segmento = {
  segmentoId: string
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
