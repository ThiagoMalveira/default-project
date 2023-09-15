import { Fragment } from 'react'
import { Routes as ListRoutes, Navigate, Route } from 'react-router-dom'

import Panel from '@components/App/Panel'

import useIsAuthenticated from '@hooks/useAuthenticated'
import PathRoutes from './PathRoutes'
import PathScreens from './PathScreens'

const PrivateRoute = ({ children }: any) => {
  const { isAuthenticated } = useIsAuthenticated()

  return isAuthenticated ? (
    <Panel>{children}</Panel>
  ) : (
    <Navigate to={PathRoutes.SIGN_IN} replace />
  )
}

const Routes = () => {
  return (
    <Fragment>
      <ListRoutes>
        <Route index element={PathScreens.HOME} />
        {/*
          <Route path="*" element={PathScreens.NOT_FOUND} />
        */}
        <Route path={PathRoutes.SIGN_IN} element={PathScreens.SIGN_IN} />
        <Route path={PathRoutes.SIGN_UP} element={PathScreens.SIGN_UP} />
        <Route
          path={PathRoutes.FORGOT_PASSWORD}
          element={PathScreens.FORGOT_PASSWORD}
        />
        <Route
          path={PathRoutes.OPERATOR_PARTNERS}
          element={<PrivateRoute>{PathScreens.OPERATOR_PARTNERS}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.REGISTER}
          element={<PrivateRoute>{PathScreens.REGISTER}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.PRODUCTS_REGISTER}
          element={<PrivateRoute>{PathScreens.PRODUCTS_REGISTER}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.SALES_AND_BILLING}
          element={<PrivateRoute>{PathScreens.SALES_AND_BILLING}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.PANEL_DASHBOARD}
          element={<PrivateRoute>{PathScreens.PANEL_DASHBOARD}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.PANEL_PRODUCT}
          element={<PrivateRoute>{PathScreens.PANEL_PRODUCT}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.PANEL_REQUESTS}
          element={<PrivateRoute>{PathScreens.PANEL_REQUESTS}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.PANEL_FINANCIAL}
          element={<PrivateRoute>{PathScreens.PANEL_FINANCIAL}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.PANEL_SHIPPING}
          element={<PrivateRoute>{PathScreens.PANEL_SHIPPING}</PrivateRoute>}
        />
      </ListRoutes>
    </Fragment>
  )
}

export default Routes
