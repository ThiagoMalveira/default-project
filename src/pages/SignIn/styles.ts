import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`

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

export const WrapperField = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WrapperIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 50px;
`

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

export const WrapperTitle = styled.div`
  padding: 60px 0;
`

export const WrapperFields = styled.div`
  padding: 20px 0;
`

export const WrapperButton = styled.div`
  padding: 50px 0;
`

export const WrapperForgotPassword = styled.div``

export const WrapperSignUp = styled.div``
