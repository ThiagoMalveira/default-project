import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.palette.primary.lightest};
`
