import { Global, ThemeProvider, css } from '@emotion/react'
import { PropsWithChildren, ReactElement } from 'react'

import LatoBlack from '@assets/fonts/Lato-Black.ttf'
import LatoBold from '@assets/fonts/Lato-Bold.ttf'
import LatoLight from '@assets/fonts/Lato-Light.ttf'
import LatoRegular from '@assets/fonts/Lato-Regular.ttf'
import LatoThin from '@assets/fonts/Lato-Thin.ttf'
import { theme } from '@resources/theme'

export const DesignSystemProvider = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const StyleGlobal = (): ReactElement => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }

      body {
        background: white;
        font-family: Open-Sans, Helvetica, Sans-Serif;
      }

      @font-face {
        font-family: 'LatoBlack';
        src:
          local('LatoBlack'),
          local('Lato-Black'),
          url(${LatoBlack}) format('truetype');
      }

      @font-face {
        font-family: 'LatoBold';
        src:
          local('LatoBold'),
          local('Lato-Bold'),
          url(${LatoBold}) format('truetype');
      }

      @font-face {
        font-family: 'LatoLight';
        src:
          local('LatoLight'),
          local('Lato-Light'),
          url(${LatoLight}) format('truetype');
      }

      @font-face {
        font-family: 'LatoRegular';
        src:
          local('LatoRegular'),
          local('Lato-Regular'),
          url(${LatoRegular}) format('truetype');
      }

      @font-face {
        font-family: 'LatoThin';
        src:
          local('LatoThin'),
          local('Lato-Thin'),
          url(${LatoThin}) format('truetype');
      }
    `}
  />
)
