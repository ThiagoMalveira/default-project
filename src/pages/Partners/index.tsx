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
  const { header, data, client } = usePartners()

  return (
    <>
      <S.Container>
        <Sidebar />
        <HeaderPartner />
      </S.Container>

      <S.ContainerDataGrid>
        <S.WrapperFilters>
          <Typography
            onClick={() => console.log('Set pending ')}
            align="center"
            size={28}
            weight="700"
            color={theme.palette.text.dark}
          >
            Pendentes
          </Typography>
          <Separator horizontalSize={10} />
          <Typography
            align="center"
            size={28}
            weight="700"
            color={theme.palette.text.dark}
          >
            Aprovados
          </Typography>
          <Separator horizontalSize={10} />
          <Typography
            align="center"
            size={28}
            weight="700"
            color={theme.palette.text.dark}
          >
            Reprovado
          </Typography>
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
