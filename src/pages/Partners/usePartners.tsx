import { IGridData, IGridHeader } from '@components/DataGrid/types'
import ModalAccept from '@components/ModalAccept'
import ModalPending from '@components/ModalPending'
import ModalReject from '@components/ModalReject'
import { FontType } from '@components/UI/Typography'
import { useAppDispatch, useAppSelector } from '@hooks/store'
import { Backdrop, Modal } from '@material-ui/core'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark'
import { theme } from '@resources/theme'
import { formatStringToCNPJ } from '@resources/utils/cnpj'
import { fetchClients } from '@store/clients/action'
import { useEffect, useState } from 'react'
import * as S from './styles'
import { IObjGrid } from './types'

const ITEMS_PER_PAGE = 10

const usePartners = () => {
  const { client } = useAppSelector((state) => state.client)
  const [filter, setFilter] = useState<'PENDENTE' | 'APROVADO' | 'REPROVADO'>(
    'PENDENTE',
  )
  const [openModalAccept, setOpenModalAccept] = useState(false)
  const [openModalReject, setOpenModalReject] = useState(false)
  const [openModalPending, setOpenModalPending] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useAppDispatch()
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

  const handleCloseModal = () => {
    setOpenModalReject(false)
    setOpenModalAccept(false)
  }

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
      grid: 5,
      action: () => null,
      order: false,
      value: 'status',
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
          <S.WrapperIcons>
            <CheckIcon
              onClick={() => setOpenModalAccept(true)}
              sx={{ color: theme.palette.success.dark }}
            />

            <Modal
              open={openModalAccept}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
              onClose={handleCloseModal}
            >
              <ModalAccept id={id} />
            </Modal>

            <CloseIcon
              onClick={() => setOpenModalReject(true)}
              sx={{ color: theme.palette.error.dark }}
            />

            <Modal
              open={openModalReject}
              onClose={handleCloseModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <ModalReject id={id} />
            </Modal>

            <QuestionMarkIcon
              onClick={() => setOpenModalPending(true)}
              sx={{ color: theme.palette.warning.regular }}
            />
            <Modal
              open={openModalPending}
              onClose={handleCloseModal}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <ModalPending id={id} />
            </Modal>
          </S.WrapperIcons>
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

  return {
    data,
    header,
    client,
    setFilter,
    filter,
    handlePageChange,
    currentItems,
    totalPages,
    currentPage,
  }
}

export default usePartners
