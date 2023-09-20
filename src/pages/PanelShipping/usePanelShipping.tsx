import { IGridData, IGridHeader } from '@components/DataGridShipping/types'
import { FontType } from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { useState } from 'react'

const usePanelShipping = () => {
  const [filter, setFilter] = useState<'ENVIADAS' | 'MANUAIS'>('ENVIADAS')

  const [data, setData] = useState<IGridData[]>([])

  const header: IGridHeader[] = [
    {
      label: 'UF',
      grid: 1,
      action: () => null,
      order: false,
      value: 'uf',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.bold,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'PESO (KG)',
      grid: 6,
      action: () => null,
      order: true,
      value: 'peso',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'COMPRIMENTO (CM)',
      grid: 11,
      action: () => null,
      order: false,
      value: 'comprimento',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'ALTURA (CM)',
      grid: 7,
      action: () => null,
      order: false,
      value: 'altura',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'LARGURA (CM)',
      grid: 7,
      action: () => null,
      order: false,
      value: 'largura',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'PRAZO MIN',
      grid: 5,
      action: () => null,
      order: false,
      value: 'prazo_min',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'PRAZO MAX',
      grid: 7,
      action: () => null,
      order: false,
      value: 'prazo_max',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'VALOR FRETE',
      grid: 8,
      action: () => null,
      order: false,
      value: 'shipping_value',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'FAIXA GRÁTIS',
      grid: 8,
      action: () => null,
      order: false,
      value: 'free_shipping',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
  ]

  const tables = [
    {
      id: '1',
      shippingCompany: 'CORREIOS',
      shippingDate: '15/05/2023 15:45',
      statesServed: 'Todos',
      status: 'Ativo',
    },
    {
      id: '2',
      shippingCompany: 'MELHOR ENVIO',
      shippingDate: '15/05/2023 15:45',
      statesServed: 'SP/RJ',
      status: 'Ativo',
    },
    {
      id: '3',
      shippingCompany: 'JADLOG',
      shippingDate: '15/05/2023 15:45',
      statesServed: 'Todos',
      status: 'Ativo',
    },
  ]

  return {
    filter,
    setFilter,
    data,
    header,
    tables,
  }
}

export default usePanelShipping
