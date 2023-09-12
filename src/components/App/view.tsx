import { Fragment, FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from '@route/Routes'

import { DesignSystemProvider, StyleGlobal } from '@components/DesignSystem'
import { persistor, store } from '@store/index'

import 'react-toastify/dist/ReactToastify.css'

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
  )
}

export default App
