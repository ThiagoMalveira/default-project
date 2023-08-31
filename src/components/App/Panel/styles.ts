import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.palette.primary.dark};
`

export const Content = styled.div`
  padding: 0;
  margin: 0;
`
