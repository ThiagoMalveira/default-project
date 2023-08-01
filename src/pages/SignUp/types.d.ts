export type InitialValues = {
  clienteCnpj: string
  clienteDataFundacao: string
  clienteInscricaoMunicipal: number | null
  clienteInscricaoEstadual: number | null
  capacidadeEntrega: ''
  clienteEmailComercial: ''
  clienteTelefoneComercial: ''
  segmentos: [
    {
      segmentoId: number | null
      segmentoNome: string
    },
  ]
}
