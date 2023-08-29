import { IGridData, IGridHeader } from '@components/DataGrid/types'
import SelectDataGrid from '@components/UI/SelectDataGrid'
import { FontType } from '@components/UI/Typography'
import { useAppDispatch, useAppSelector } from '@hooks/store'
import HandleNotification from '@resources/helpers/handleNotification'
import { theme } from '@resources/theme'
import { typesNotification } from '@resources/types/notification'
import { formatStringToCNPJ } from '@resources/utils/cnpj'
import { ClientService } from '@services/client'
import { fetchClients } from '@store/clients/action'
import { ChangeEvent, useEffect, useState } from 'react'
import ModalAprovado from './Components/ModalAprovado'
import ModalReprovado from './Components/ModalReprovado'
import { IObjGrid } from './types'

const usePartners = () => {
  const { client } = useAppSelector((state) => state.client)
  const [filter, setFilter] = useState<'PENDENTE' | 'APROVADO' | 'REPROVADO'>(
    'PENDENTE',
  )
  const dispatch = useAppDispatch()
  const [data, setData] = useState<IGridData[]>([])

  const OPTIONS = [
    { id: 1, value: 'PENDENTE' },
    { id: 2, value: 'APROVADO' },
    { id: 3, value: 'REPROVADO' },
  ]

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

  const getObjDataGrid = ({
    id,
    cnpj,
    status,
    estado,
    segmento,
    entrega,
    index,
  }: IObjGrid) => {
    return {
      id,
      values: {
        cnpj,
        status,
        estado,
        segmento,
        entrega,
        index,
      },
      select: '',
      action: (
        <>
          <SelectDataGrid
            list={OPTIONS}
            value={status}
            inputWidth={150}
            inputHeight={26}
            backgroundColor={theme.palette.success.dark}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              const clientestatusaprovacao = event.target.value
              const clienteId = id

              const ModalSetup = {
                APROVADO: () => (
                  <ModalAprovado
                    open={true}
                    id={clienteId}
                    status={clientestatusaprovacao}
                  />
                ),
                REPROVADO: () => (
                  <ModalReprovado
                    open={true}
                    id={clienteId}
                    status={clientestatusaprovacao}
                  />
                ),
              }
              try {
                ClientService.putClientStatus({
                  clienteId,
                  clientestatusaprovacao,
                })

                ModalSetup[clientestatusaprovacao]()

                HandleNotification(
                  typesNotification.SUCCESS,
                  'Alterado com sucesso!',
                )
              } catch (err) {
                HandleNotification(
                  typesNotification.ERROR,
                  'Não foi possível alterar!',
                )
              }
            }}
          />
        </>
      ),
    }
  }

  useEffect(() => {
    if (!client) return

    let Clients: IGridData[] = []

    const clientFiltered = client.filter(
      (client) => client.clientestatusaprovacao === filter,
    )

    if (clientFiltered?.length) {
      Clients = clientFiltered.map((clients, index) => {
        const item: IGridData = getObjDataGrid({
          id: clients.clienteId,
          cnpj: formatStringToCNPJ(clients.clienteCnpj),
          estado: clients?.clienteAddressUf || 'Sem estado',
          segmento: clients?.segmentos[0]?.segmentoNome || 'Sem segmento',
          entrega: 'NACIONAL',
          status: clients.clientestatusaprovacao,
          index,
        })
        return item
      })
      setData(Clients)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client, filter])

  useEffect(() => {
    dispatch(fetchClients())
  }, [dispatch])

  return { data, header, client, setFilter, filter }
}

export default usePartners
