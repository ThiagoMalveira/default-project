export type IRequestClient = {
  clienteCnpj: string
  clienteDataFundacao: string | null
  clienteInscricaoMunicipal: number | null
  clienteInscricaoEstadual: number | null
  capacidadeEntrega: ''
  clienteEmailComercial: ''
  clienteTelefoneComercial: ''
  segmentos: Segmento[]
}

export type Segmento = {
  segmentoId: number
  segmentoNome: string
}

export type IGetClient = {
  id: string
}

export type IUpdateStatus = {
  clienteId: number
  clientestatusaprovacao: string
}
