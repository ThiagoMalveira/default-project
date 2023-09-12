import HeaderPartner from '@components/HeaderPartner'
import Sidebar from '@components/Sidebar'
import * as S from './styles'

const PanelProduct = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.WrapperHeader>
        <HeaderPartner />
      </S.WrapperHeader>
    </S.Container>
  )
}

export default PanelProduct
