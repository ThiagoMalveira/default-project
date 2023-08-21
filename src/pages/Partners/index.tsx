import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import * as S from './styles'

const Partners = () => {
  // const { columns, rows } = usePartners()

  return (
    <>
      <S.Container>
        <Sidebar />
        <HeaderPartner />
      </S.Container>

      <S.ContainerDataGrid>
        {/*<DataGrid header={columns} data={rows} /> */}
      </S.ContainerDataGrid>
    </>
  )
}

export default Partners
