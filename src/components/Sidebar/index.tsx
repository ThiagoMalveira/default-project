import Logo from '@assets/images/Logo.png'
import { useAppSelector } from '@hooks/store'
import { useHandleNavigate } from '@hooks/useHandleNavigate'
import usePageTitle from '@hooks/usePageTitle'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import ChecklistIcon from '@mui/icons-material/Checklist'
import HomeIcon from '@mui/icons-material/Home'
import InventoryIcon from '@mui/icons-material/Inventory'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import PersonIcon from '@mui/icons-material/Person'
import PathRoutes from '@route/PathRoutes'
import SidebarItem from '../SidebarItem'
import { Container, ContainerMenu, Content, Image, WrapperLogo } from './styles'

const Sidebar = () => {
  const { handleNavigate } = useHandleNavigate()
  const { pageTitle } = usePageTitle()
  const { user } = useAppSelector((state) => state.auth)

  return (
    <>
      <ContainerMenu>
        <Container>
          <WrapperLogo>
            <Image src={Logo} />
          </WrapperLogo>
          <Content>
            <SidebarItem
              Icon={HomeIcon}
              Text="Dashboard"
              path={() => handleNavigate(PathRoutes.PANEL_DASHBOARD)}
              Active={pageTitle === 'Dashboard'}
            />
            {user.roles.includes('ROLE_ADMIN') && (
              <SidebarItem
                Icon={PersonIcon}
                Text="Parceiros"
                path={() => handleNavigate(PathRoutes.OPERATOR_PARTNERS)}
                Active={pageTitle === 'Parceiros'}
              />
            )}
            <SidebarItem
              Icon={ChecklistIcon}
              Text="Pedidos"
              path={() => handleNavigate(PathRoutes.PANEL_REQUESTS)}
              Active={pageTitle === 'Pedidos'}
            />
            <SidebarItem
              Icon={InventoryIcon}
              Text="Produtos"
              path={() => handleNavigate(PathRoutes.PANEL_PRODUCT)}
              Active={pageTitle === 'Produtos'}
            />
            <SidebarItem
              Icon={AttachMoneyIcon}
              Text="Financeiro"
              path={() => handleNavigate(PathRoutes.PANEL_FINANCIAL)}
              Active={pageTitle === 'Financeiro'}
            />
            <SidebarItem
              Icon={LocalShippingIcon}
              path={() => handleNavigate(PathRoutes.PANEL_SHIPPING)}
              Text="Fretes"
              Active={pageTitle === 'Fretes'}
            />
          </Content>
        </Container>
      </ContainerMenu>
    </>
  )
}

export default Sidebar
