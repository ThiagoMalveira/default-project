import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import * as S from './styles'

const PanelFinancial = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>
    </S.Container>
  )
}

export default PanelFinancial
