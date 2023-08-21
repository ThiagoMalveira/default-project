import { IGridHeader } from '@components/DataGrid/types'
import { FontType } from '@components/UI/Typography'
import { useAppDispatch } from '@hooks/store'
import { fetchClients } from '@store/clients/action'
import { useEffect } from 'react'

const usePartners = () => {
  const dispatch = useAppDispatch()
  const columns: IGridHeader[] = [
    {
      label: 'CNPJ',
      grid: 2,
      action: () => null,
      order: false,
      value: 'cnpj',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.bold,
        fontSize: 14,
      },
    },
    {
      label: 'ESTADO',
      grid: 2,
      action: () => null,
      order: false,
      value: 'estado',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
      },
    },
    {
      label: 'SEGMENTO',
      grid: 5,
      action: () => null,
      order: false,
      value: 'segment',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
      },
    },
    {
      label: 'ENTREGA',
      grid: 5,
      action: () => null,
      order: false,
      value: 'entrega',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
      },
    },
    {
      label: '',
      grid: 3,
      action: () => null,
      order: false,
      value: 'action',
      field: 'interaction',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 14,
      },
    },
  ]

  const rows = [
    {
      id: 1,
      CNPJ: '00.000.000/0000-01',
      estado: 'São Paulo',
      segmento: 'Moda',
      entrega: 'Brasil',
    },
  ]

  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  return { columns, rows }
}

export default usePartners
