import { ILayout } from './types'
import { sizes } from '@resources/types/devices'

export const layout: ILayout = {
  desktop: {
    size: sizes.desktop.min,
    dimensions: {
      small: {
        width: '50px',
        minWidth: '',
        maxWidth: '',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
      medium: {
        width: '120px',
        minWidth: '',
        maxWidth: '',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
      large: {
        width: '1024px',
        minWidth: '1024px',
        maxWidth: '1440px',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
      full: {
        width: '100%',
        minWidth: '',
        maxWidth: '',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
    },
  },
  tablet: {
    size: sizes.tablet.min,
    dimensions: {
      small: {
        width: '50px',
        minWidth: '',
        maxWidth: '',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
      medium: {
        width: '120px',
        minWidth: '',
        maxWidth: '',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
      large: {
        width: '980px',
        minWidth: '768px',
        maxWidth: '980px',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
      full: {
        width: '100%',
        minWidth: '',
        maxWidth: '',
        heignt: '',
        margin: '',
        padding: '',
        fontSize: '',
      },
    },
  },
  general: {
    body: {
      margin: 0,
      padding: 0,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
      webkitFontSmoothing: 'antialiased',
      mozOsxFontSmoothing: 'grayscale',
    },
  },
}
