import { Fragment } from 'react'
import { Routes as ListRoutes, Route } from 'react-router-dom'

// import { Authenticate } from "@resources/helpers/authenticated";

// import Panel from "@components/App/Panel";

import PathRoutes from './PathRoutes'
import PathScreens from './PathScreens'

/*const PrivateRoute = ({ children }: ReactNode) => {
  const isAuthenticated = Authenticate();

  return isAuthenticated ? (
    <Panel>{children}</Panel>
  ) : (
    <Navigate to={PathRoutes.PANEL_HOME} replace />
  );
};*/

const Routes = () => {
  return (
    <Fragment>
      <ListRoutes>
        <Route index element={PathScreens.PANEL_HOME} />
        {/*
        <Route path="*" element={PathScreens.NOT_FOUND} />
        <Route path={PathRoutes.SIGN_OUT} element={PathScreens.SIGN_OUT} />
        <Route
          path={PathRoutes.RECOVER_PASSWORD}
          element={PathScreens.RECOVER_PASSWORD}
        />*/}
        <Route path={PathRoutes.SIGN_IN} element={PathScreens.PANEL_SIGN_IN} />
        <Route path={PathRoutes.SIGN_UP} element={PathScreens.PANEL_SIGN_UP} />

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
