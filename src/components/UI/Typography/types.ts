import { DefaultProps } from '@resources/types'

import { Fonts } from '@resources/types/mixins'

export interface IViewProps extends DefaultProps {
  letterSpacing?: string
  color?: string
  lineHeight?: string
  align?: string
  textDecoration?: string
  fontFamily?: string
  size?: number
  weight?: string
  fontType?: Fonts
}
