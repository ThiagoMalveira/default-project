import { IGridData, IGridHeader } from '@components/DataGridPartners/types'
import { FontType } from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { useEffect, useState } from 'react'

const ITEMS_PER_PAGE = 5

const usePanelRequests = () => {
  const [filter, setFilter] = useState<
    'PENDENTE' | 'EM TRANSITO' | 'ENTREGUES' | 'CANCELADOS'
  >('PENDENTE')
  const [currentPage, setCurrentPage] = useState(1)
  const [data, setData] = useState<IGridData[]>([])

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE

  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages =
    Math.ceil(data.length / ITEMS_PER_PAGE) > 5
      ? Math.ceil(data.length / ITEMS_PER_PAGE)
      : 5

  const handlePageChange = (page: number): void => {
    setCurrentPage(page)
  }

  const header: IGridHeader[] = [
    {
      label: 'NO. PEDIDO',
      grid: 5,
      action: () => null,
      order: false,
      value: 'n_pedido',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.bold,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'CLIENTE',
      grid: 5,
      action: () => null,
      order: true,
      value: 'client',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'CANAL DE VENDA',
      grid: 5,
      action: () => null,
      order: false,
      value: 'channel',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'ESTADO',
      grid: 5,
      action: () => null,
      order: false,
      value: 'state',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'FRETE',
      grid: 5,
      action: () => null,
      order: false,
      value: 'shipping',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'TOTAL',
      grid: 5,
      action: () => null,
      order: false,
      value: 'total_value',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'ACTION',
      grid: 3,
      action: () => null,
      order: false,
      value: 'action',
      field: 'interaction',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
  ]

  useEffect(() => {
    const newData = {
      id: data.length + 1,
      select: '',
      action: '',
      values: {
        n_pedido: '209334',
        client: 'Mariana Oliveira',
        channel: 'Mercado Livre',
        state: 'SP',
        shipping: 'Correios - R$ 15,90',
        total_value: 345.9,
      },
    }

    setData([...data, newData])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    data,
    currentItems,
    totalPages,
    currentPage,
    filter,
    setFilter,
    header,
    handlePageChange,
  }
}

export default usePanelRequests
