import { IGridData, IGridHeader } from '@components/DataGridPartners/types'
import { FontType } from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { useEffect, useState } from 'react'

const ITEMS_PER_PAGE = 5

const usePanelProduct = () => {
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
      label: 'NOME',
      grid: 5,
      action: () => null,
      order: false,
      value: 'nome',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.bold,
        fontSize: 14,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'SKU',
      grid: 5,
      action: () => null,
      order: true,
      value: 'sku',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'FORNECEDOR',
      grid: 5,
      action: () => null,
      order: false,
      value: 'fornecedor',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'CATEGORIA',
      grid: 5,
      action: () => null,
      order: false,
      value: 'categoria',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'PREÇO PADRÃO',
      grid: 5,
      action: () => null,
      order: false,
      value: 'preco',
      field: 'value',
      styles: {
        align: 'center',
        fontType: FontType.regular,
        fontSize: 14,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'ESTOQUE',
      grid: 5,
      action: () => null,
      order: false,
      value: 'estoque',
      field: 'value',
      styles: {
        align: 'center',
        fontType: FontType.regular,
        fontSize: 14,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'STATUS',
      grid: 5,
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
    {
      label: 'AÇÃO',
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
        nome: 'fake data',
        sku: '938938',
        fornecedor: 'fake data',
        categoria: 'fake data',
        preco: 345.8,
        estoque: '45',
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

export default usePanelProduct
