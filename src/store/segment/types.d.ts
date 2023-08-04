type Segmento = {
  segmentoId: number
  segmentoNome: string
}

export type ISegmentType = {
  loading: boolean
  segments: Segmento[]
  error: boolean
}
