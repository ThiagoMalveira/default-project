import DataGrid from '@components/DataGridPartners'
import HeaderPartner from '@components/HeaderPartner'
import Loading from '@components/Loading'
import Sidebar from '@components/Sidebar'
import ButtonGradient from '@components/UI/ButtonGradient'
import Typography from '@components/UI/Typography'
import { useHandleNavigate } from '@hooks/useHandleNavigate'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { theme } from '@resources/theme'
import PathRoutes from '@route/PathRoutes'
import * as S from './styles'
import usePanelProduct from './usePanelProduct'

const PanelProduct = () => {
  const { handleNavigate } = useHandleNavigate()
  const {
    currentItems,
    currentPage,
    data,
    handlePageChange,
    header,
    totalPages,
  } = usePanelProduct()
  return (
    <S.Container>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>

      <S.ContainerDataGrid>
        <S.WrapperFilters>
          <S.ContainerFilter>
            <S.WrapperText>
              <Typography
                align="center"
                size={18}
                weight="600"
                color={theme.palette.text.dark}
              >
                Listagem de produtos
              </Typography>
            </S.WrapperText>

            <S.WrapperButton>
              <ButtonGradient
                onClick={() =>
                  handleNavigate(PathRoutes.PANEL_PRODUCT_REGISTER)
                }
                width={172}
                height={45}
              >
                <Typography
                  size={16}
                  weight="600"
                  align="center"
                  color={theme.palette.primary.light}
                >
                  + Novo produto
                </Typography>
              </ButtonGradient>
            </S.WrapperButton>
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

export default PanelProduct
