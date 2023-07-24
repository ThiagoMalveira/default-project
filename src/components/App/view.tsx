import { Fragment, FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "@route/Routes";

import { StyleGlobal, DesignSystemProvider } from "@components/DesignSystem";
import { store, persistor } from "@store/index";

import "react-toastify/dist/ReactToastify.css";

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <DesignSystemProvider>
              <StyleGlobal />
              <Routes />
              <ToastContainer />
            </DesignSystemProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default App;
