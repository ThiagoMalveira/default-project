import { render as rtlRender } from '@testing-library/react'
import { Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { store } from '@store/index'

import { DesignSystemProvider, StyleGlobal } from '@components/DesignSystem'

function render(ui, { ...renderOptions } = {}) {
  function Wrapper({ children }: any) {
    return (
      <Fragment>
        <Provider store={store}>
          <BrowserRouter>
            <DesignSystemProvider>
              <StyleGlobal />
              {/* <Routes /> */}
              <ToastContainer />

              {children}
            </DesignSystemProvider>
          </BrowserRouter>
        </Provider>
      </Fragment>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
