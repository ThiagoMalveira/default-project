import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const ContainerImage = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.info.lightest};
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 0px 30px 30px 0px;
`

export const WrapperLogo = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`

export const WrapperImage = styled.div<DefaultProps>`
  display: flex;
  width: 45vw;
  height: 60vh;
  justify-content: center;
  flex-direction: column;
`

export const WrapperText = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  width: 100%;
`
