import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 25%;
  right: 35%;
  width: 954px;
  height: 603px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.lightest};
`

export const WrapperTermsText = styled.div<DefaultProps>`
  width: 829px;
  height: 383px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.info.lightest};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.tertiary.dark};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.neutral.lightest};
  }
`

export const WrapperButton = styled.div<DefaultProps>`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  padding: 20px 0;
`

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 80%;
  padding: 20px 0px;
`
