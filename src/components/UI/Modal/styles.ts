import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'

import { IStylesProps } from './types'

export const Container = styled.div<DefaultProps & IStylesProps>`
  visibility: hidden;
  padding: 0;
  opacity: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  z-index: 10;
  transition: 0.2s ease-in-out;
  @media ${({ theme }) => theme.layout.desktop.size} {
    padding: 20px;
  }
  ${({ isOpen }) =>
    isOpen &&
    `
    visibility: visible;
    opacity: 1;
  `};
`

export const WrapperModal = styled.div<DefaultProps & IStylesProps>`
  display: flex;
  flex-direction: column;
  background: ${({ bgColor, theme }) => bgColor || theme.palette.info.dark};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding-top: 20px;
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom: ${paddingBottom}px`};
`

export const WrapperContent = styled.div<DefaultProps & IStylesProps>`
  display: flex;
  flex-direction: column;
  background: ${({ bgColor, theme }) => bgColor || theme.palette.info.dark};
  align-items: center;
  min-width: 120px;
  opacity: 0;
  transform: translate(0, -100%);
  transition: 0.4s;

  ${({ height }) => height && `height: ${height}px`};
  ${({ width }) => width && `width: ${width}px`};

  ${({ isOpen }) =>
    isOpen &&
    `
    transform: translate(0, 0);
    opacity: 1;
  `};
`

export const Body = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  width: 100%;
  text-align: center;
`

export const Footer = styled.div<IStylesProps>`
  display: flex;
  flex-direction: ${({ alignFooter }) => alignFooter};
  justify-content: center;
  align-items: center;
  min-height: 50px;
  width: 100%;
  margin: 10px 0;
`

export const WrapperButtonFooter = styled.div<IStylesProps>`
  min-width: ${({ widthBtFooter }) => widthBtFooter};
  margin: ${({ marginBtFooter }) => marginBtFooter};
`

export const WrapperIcon = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.palette.neutral.dark};
  border-radius: 25px;
  position: absolute;
  top: -38px;
  right: -25px;
`
