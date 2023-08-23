import DataGrid from '@components/DataGrid'
import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import * as S from './styles'
import usePartners from './usePartners'

const Partners = () => {
  const { header, data } = usePartners()

  return (
    <>
      <S.Container>
        <Sidebar />
        <HeaderPartner />
      </S.Container>

      <S.ContainerDataGrid>
        <S.WrapperGrid>
          <DataGrid header={header} data={data} />
        </S.WrapperGrid>
      </S.ContainerDataGrid>
    </>
  )
}

export default Partners
