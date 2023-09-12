import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const WrapperDashboard = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;

  height: 2px;
  background: ${({ theme }) => theme.palette.primary.light};
`

export const WrapperTitle = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  padding: 40px;
`
