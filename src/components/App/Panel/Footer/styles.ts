import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  max-height: 242px;
  padding: 30px 30px 30px 10px;

  @media (max-width: 480px) {
    flex-direction: column;
    max-height: 600px;
  }
`

export const WrapperLogo = styled.div<DefaultProps>``

export const WrapperMap = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  padding: 40px 0;

  &:hover {
    cursor: pointer;
  }
`

export const WrapperContactUs = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`

export const WrapperEmail = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export const WrapperWhatsApp = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export const WrapperInstagram = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
`

export const WrapperFollowUs = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`
