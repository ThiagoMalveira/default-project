import styled from '@emotion/styled'

import { IViewProps } from './types'

const SpaceWrapper = styled.div<IViewProps>`
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  border-bottom: ${({ displayLine, theme }) =>
    displayLine
      ? `solid 1px
   ${theme.palette.info.dark}`
      : 'none'};
`

export default SpaceWrapper
