import { Fragment } from 'react'
import { Routes as ListRoutes, Navigate, Route } from 'react-router-dom'

import Panel from '@components/App/Panel'

import useAuthenticated from '@hooks/useAuthenticated'
import PathRoutes from './PathRoutes'
import PathScreens from './PathScreens'

const PrivateRoute = ({ children }: any) => {
  const { Authenticated } = useAuthenticated()

  return Authenticated ? (
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
        <Route path={PathRoutes.SIGN_OUT} element={PathScreens.SIGN_OUT} />
        <Route
          path={PathRoutes.RECOVER_PASSWORD}
          element={PathScreens.RECOVER_PASSWORD}
        />*/}
        <Route path={PathRoutes.SIGN_IN} element={PathScreens.SIGN_IN} />
        <Route path={PathRoutes.SIGN_UP} element={PathScreens.SIGN_UP} />
        <Route
          path={PathRoutes.FORGOT_PASSWORD}
          element={PathScreens.FORGOT_PASSWORD}
        />
        <Route
          path={PathRoutes.PARTNERS}
          element={<PrivateRoute>{PathScreens.PARTNERS}</PrivateRoute>}
        />

        <Route
          path={PathRoutes.REGISTER}
          element={<PrivateRoute>{PathScreens.REGISTER}</PrivateRoute>}
        />

        {/* Private Routes 
        <Route
          // path={PathRoutes.PANEL_HOME}
          element={<PrivateRoute>{PathScreens.PANEL_HOME}</PrivateRoute>}
        />
        */}
      </ListRoutes>
    </Fragment>
  )
}

export default Routes
