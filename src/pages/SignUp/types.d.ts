export type InitialValues = {
  clienteCnpj: string
  clienteDataFoundation: string | null
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
