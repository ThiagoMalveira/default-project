import '@emotion/styled'

import { ITheme } from '@resources/theme'

declare module '@emotion/styled' {
  export type DefaultTheme = ITheme
}
