import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.palette.primary.lightest};
`

export const ContainerDataGrid = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 90vh;
`

export const ContainerButton = styled.div<DefaultProps>`
  display: flex;
  width: 110px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
