import Icon from '@components/UI/Icon'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ChecklistIcon from '@mui/icons-material/Checklist'
import HomeIcon from '@mui/icons-material/Home'
import InventoryIcon from '@mui/icons-material/Inventory'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PersonIcon from '@mui/icons-material/Person'
import SidebarItem from '../SidebarItem'
import { Container, ContainerMenu, Content, WrapperLogo } from './styles'

const Sidebar = () => {
  return (
    <>
      <ContainerMenu>
        <Container>
          <WrapperLogo>
            <Icon name="logo" />
          </WrapperLogo>
          <Content>
            <SidebarItem Icon={HomeIcon} Text="Dashboard" />
            <SidebarItem Icon={PersonIcon} Text="Parceiros" Active />
            <SidebarItem Icon={ChecklistIcon} Text="Pedidos" />
            <SidebarItem Icon={InventoryIcon} Text="Produtos" />
            <SidebarItem Icon={AttachMoneyIcon} Text="Financeiro" />
            <SidebarItem Icon={LocalShippingIcon} Text="Fretes" />
          </Content>
        </Container>
      </ContainerMenu>
    </>
  )
}

export default Sidebar
