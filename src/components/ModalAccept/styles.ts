import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const ContainerModal = styled.div<DefaultProps>`
  background: ${({ theme }) => theme.palette.primary.light};
  width: 467px;
  height: 448px;
  border-radius: 20px;
  position: absolute;
  top: 26%;
  right: 0;
  bottom: 0;
  left: 45%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-x: auto;
  z-index: 9999;
  transition: 0.2s ease-in-out;
  backdrop-filter: blur(10px);
  border: 1px solid #cecece;
`

export const WrapperCloseButton = styled.div<DefaultProps>`
  display: flex;
  width: 415px;
  height: 30px;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperButton = styled.div<DefaultProps>`
  display: flex;
  width: 415px;
  height: 42px;
  padding: 10px;
  justify-content: flex-end;
`

export const WrapperReason = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`

export const WrapperTitle = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const WrapperIcon = styled.div<DefaultProps>`
  display: flex;
`

export const WrapperField = styled.div<DefaultProps>`
  display: flex;
  padding: 20px 0;
`
