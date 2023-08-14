import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import SidebarItem from '../SidebarItem'
import { Container, ContainerMenu, Content } from './styles'

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const closeSidebar = () => {
    setSidebar(false)
  }

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <>
      <ContainerMenu>
        <MenuIcon onClick={showSiderbar} />
        {sidebar && (
          <Container sidebar={sidebar}>
            <MenuIcon onClick={closeSidebar} />
            <Content>
              <SidebarItem IconName={'HomeIcon'} Text="Dashboard" />
              <SidebarItem IconName={'PersonIcon'} Text="Parceiros" />
              <SidebarItem IconName={'ChecklistIcon'} Text="Pedidos" />
              <SidebarItem IconName={'InventoryIcon'} Text="Produtos" />
              <SidebarItem IconName={'AttachMoneyIcon'} Text="Financeiro" />
              <SidebarItem IconName={'LocalShippingIcon'} Text="Fretes" />
            </Content>
          </Container>
        )}
      </ContainerMenu>
    </>
  )
}

export default Sidebar
