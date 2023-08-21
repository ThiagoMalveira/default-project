import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-height: 100px;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 75vw;
  justify-content: space-between;
  align-items: flex-start;
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  max-height: 100px;
  width: 100vw;
  max-width: 300px;
  padding: 0 40px;
  &:hover {
    cursor: pointer;
  }
`

export const WrapperIconOutlined = styled.div`
  background-color: #eddeab;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapperIconPerson = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ModalContainer = styled.div<DefaultProps>`
  position: absolute;
  top: 20px;
  right: 50px;
  max-width: 204px;
  max-height: 267px;
  width: 100vw;
  height: 100vh;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.info.lightest};
  background: ${({ theme }) => theme.palette.primary.light};
  box-shadow: 0px 9px 10px 0px rgba(0, 0, 0, 0.1);
`

export const WrapperName = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px 0px;
`

export const WrapperOptions = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
