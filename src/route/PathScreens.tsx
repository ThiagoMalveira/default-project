import ForgotPassword from '@pages/ForgotPassword'
import Home from '@pages/Home'
import PanelDashboard from '@pages/PanelDashboard'
import PanelFinancial from '@pages/PanelFinancial'
import PanelProduct from '@pages/PanelProduct'
import PanelRequests from '@pages/PanelRequests'
import PanelShipping from '@pages/PanelShipping'
import Partners from '@pages/Partners'
import ProductsRegister from '@pages/ProductsRegister'
import Register from '@pages/Register'
import SalesAndBilling from '@pages/SalesAndBilling'
import SignIn from '@pages/SignIn'
import SignUp from '@pages/SignUp'

const PathScreens = {
  HOME: <Home />,
  SIGN_IN: <SignIn />,
  SIGN_UP: <SignUp />,
  FORGOT_PASSWORD: <ForgotPassword />,

  REGISTER: <Register />,
  PRODUCTS_REGISTER: <ProductsRegister />,
  SALES_AND_BILLING: <SalesAndBilling />,

  PARTNERS: <Partners />,

  PANEL_DASHBOARD: <PanelDashboard />,
  PANEL_PRODUCT: <PanelProduct />,
  PANEL_REQUESTS: <PanelRequests />,
  PANEL_FINANCIAL: <PanelFinancial />,
  PANEL_SHIPPING: <PanelShipping />,
}

export default PathScreens
