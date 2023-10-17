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
import usePartners from './usePartners'

const Partners = () => {
  const {
    header,
    client,
    setFilter,
    filter,
    currentItems,
    handlePageChange,
    totalPages,
    currentPage,
  } = usePartners()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Parceiros | Konekte</title>
      </Helmet>
      <S.Container>
        <Sidebar />
        <HeaderPartner />
      </S.Container>

      <S.ContainerDataGrid>
        <S.WrapperFilters>
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('PENDENTE')}
              align="center"
              size={28}
              weight="700"
              color={
                filter === 'PENDENTE'
                  ? `${theme.palette.warning.lightest}`
                  : `${theme.palette.text.dark}`
              }
            >
              Pendentes
            </Typography>
          </S.ContainerFilter>
          <Separator horizontalSize={10} />
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('APROVADO')}
              align="center"
              size={28}
              weight="700"
              color={
                filter === 'APROVADO'
                  ? `${theme.palette.warning.lightest}`
                  : `${theme.palette.text.dark}`
              }
            >
              Aprovados
            </Typography>
          </S.ContainerFilter>
          <Separator horizontalSize={10} />
          <S.ContainerFilter filter={filter}>
            <Typography
              onClick={() => setFilter('REPROVADO')}
              align="center"
              size={28}
              weight="700"
              color={
                filter === 'REPROVADO'
                  ? `${theme.palette.warning.lightest}`
                  : `${theme.palette.text.dark}`
              }
            >
              Reprovado
            </Typography>
          </S.ContainerFilter>
        </S.WrapperFilters>
        {!client ? (
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
    </>
  )
}

export default Partners
