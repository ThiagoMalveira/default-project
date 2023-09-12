import { ThemeProvider } from '@mui/material/styles'
import { Fragment, FunctionComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

import Routes from '@route/Routes'

import { DesignSystemProvider, StyleGlobal } from '@components/DesignSystem'
import { persistor, store } from '@store/index'

import 'react-toastify/dist/ReactToastify.css'
import theme from './theme'

const App: FunctionComponent = () => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Fragment>
  )
}

export default App
