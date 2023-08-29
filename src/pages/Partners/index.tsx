import DataGrid from '@components/DataGrid'
import HeaderPartner from '@components/HeaderPartner'
import Loading from '@components/Loading'
import Sidebar from '@components/Sidebar'
import Separator from '@components/UI/Separator'
import Typography from '@components/UI/Typography'
import { theme } from '@resources/theme'
import * as S from './styles'
import usePartners from './usePartners'

const Partners = () => {
  const { header, data, client, setFilter, filter } = usePartners()

  return (
    <>
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
            <DataGrid header={header} data={data} />
          </S.WrapperGrid>
        )}
      </S.ContainerDataGrid>
    </>
  )
}

export default Partners
