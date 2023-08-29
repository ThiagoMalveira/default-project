export type IObjGrid = {
  id: string
  cnpj: string
  estado: string
  segmento: string
  entrega: string
  status: string
  index: number
}

export type IPropsStyle = {
  filter: 'PENDENTE' | 'APROVADO' | 'REPROVADO'
}
