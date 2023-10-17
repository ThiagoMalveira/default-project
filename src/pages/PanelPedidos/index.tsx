import DataGrid from '@components/DataGridPartners'
import HeaderPartner from '@components/HeaderPartner'
import Loading from '@components/Loading'
import Sidebar from '@components/Sidebar'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { theme } from '@resources/theme'
import { Helmet } from 'react-helmet'
import * as S from './styles'
import usePanelRequests from './usePanelRequests'

const PanelRequests = () => {
  const {
    currentItems,
    currentPage,
    data,
    filter,
    handlePageChange,
    header,
    setFilter,
    totalPages,
  } = usePanelRequests()
  return (
    <S.Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pedidos | Konekte</title>
      </Helmet>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>

      <S.ContainerDataGrid>
        <S.WrapperFilters>
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('PENDENTE')}
              align="center"
              size={18}
              weight="700"
              color={
                filter === 'PENDENTE'
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Pendentes
            </Typography>
          </S.ContainerFilter>
          <Separator horizontalSize={10} />
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('EM TRANSITO')}
              align="center"
              size={18}
              weight="700"
              color={
                filter === 'EM TRANSITO'
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Em trânsito
            </Typography>
          </S.ContainerFilter>
          <Separator horizontalSize={10} />
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('ENTREGUES')}
              align="center"
              size={18}
              weight="700"
              color={
                filter === 'ENTREGUES'
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Entregues
            </Typography>
          </S.ContainerFilter>
          <Separator horizontalSize={10} />
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('CANCELADOS')}
              align="center"
              size={18}
              weight="700"
              color={
                filter === 'CANCELADOS'
                  ? `${theme.palette.warning.lightest}`
                  : `#9B9B9B`
              }
            >
              Cancelados
            </Typography>
          </S.ContainerFilter>
        </S.WrapperFilters>
        {!data ? (
          <Loading />
        ) : (
          <S.WrapperGrid>
            <DataGrid header={header} data={currentItems} />
            <S.WrapperPagination>
              <NavigateBeforeIcon
                onClick={() => handlePageChange(currentPage - 1)}
                sx={{ color: theme.palette.tertiary.dark }}
              />
              {Array.from({ length: totalPages }, (_, index: number) => (
                <S.WrapperButtonPagination
                  key={index}
                  isActive={currentPage === index + 1}
                  onClick={() => handlePageChange(index + 1)}
                >
                  <S.Button isActive={currentPage === index + 1}>
                    {index + 1}
                  </S.Button>
                </S.WrapperButtonPagination>
              ))}
              <NavigateNextIcon
                onClick={() => handlePageChange(currentPage + 1)}
                sx={{ color: theme.palette.tertiary.dark }}
              />
            </S.WrapperPagination>
          </S.WrapperGrid>
        )}
      </S.ContainerDataGrid>
    </S.Container>
  )
}

export default PanelRequests
