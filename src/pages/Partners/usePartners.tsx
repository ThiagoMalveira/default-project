import { IGridData, IGridHeader } from '@components/DataGrid/types'
import { FontType } from '@components/UI/Typography'
import { useAppDispatch, useAppSelector } from '@hooks/store'
import { theme } from '@resources/theme'
import { fetchClients } from '@store/clients/action'
import { useEffect, useState } from 'react'
import { IObjGrid } from './types'

const usePartners = () => {
  const { client } = useAppSelector((state) => state.client)
  const dispatch = useAppDispatch()
  const [data, setData] = useState<IGridData[]>([])

  const header: IGridHeader[] = [
    {
      label: 'CNPJ',
      grid: 5,
      action: () => null,
      order: false,
      value: 'cnpj',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.bold,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'ESTADO',
      grid: 5,
      action: () => null,
      order: true,
      value: 'estado',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'SEGMENTO',
      grid: 5,
      action: () => null,
      order: false,
      value: 'segmento',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
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
        fontSize: 22,
        color: `${theme.palette.text.dark}`,
      },
    },
    {
      label: 'STATUS',
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

  const getObjDataGrid = ({ id, cnpj, segmento, status, index }: IObjGrid) => {
    return {
      id,
      values: {
        cnpj,
        segmento,
        status,
        index,
      },
      select: '',
      action: <></>,
    }
  }

  useEffect(() => {
    if (!client) return

    let Clients: IGridData[] = []

    if (client.lenght) {
      Clients = client.map((client, index) => {
        const item: IGridData = getObjDataGrid({
          id: client.clienteId,
          cnpj: client.clienteCnpj,
          segmento: client.segmento[0].segmentoNome,
          status: client.clientestatusaprovacao,
          index,
        })
        console.log(item)
        return item
      })
      setData(Clients)
    }
  }, [client])

  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  return { data, header }
}

export default usePartners
