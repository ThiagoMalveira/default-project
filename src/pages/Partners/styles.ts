import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'
import { IPropsStyle, IStyledProps } from './types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.palette.primary.light};
`

export const ContainerButton = styled.div<DefaultProps>`
  display: flex;
  width: 110px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const ContainerDataGrid = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.primary.lightest};

  @media (max-width: 1919px) {
    height: 90vh;
    width: 100vw;
  }
  @media (max-width: 2559px) {
    height: 93vh;
    width: 100vw;
  }
`

export const WrapperGrid = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  width: 80vw;
  height: 80vh;
  margin: 0 0 0 330px;
  padding: 20px;

  @media (min-width: 1919px) {
    margin: 0 0px 20px 330px;
  }
`

export const WrapperFilters = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  border-radius: 10px;
  width: 80vw;
  margin: 20px 0 20px 330px;
  padding: 20px;
`

export const ContainerFilter = styled.div<IPropsStyle & DefaultProps>`
  display: flex;
  padding: 10px 0px;

  ${({ filter, theme }) =>
    filter === 'PENDENTE' &&
    `
    &:nth-child(1) {
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }
    `}

  ${({ filter, theme }) =>
    filter === 'APROVADO' &&
    `
    &:nth-child(3){
      
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }

  `}

  ${({ filter, theme }) =>
    filter === 'REPROVADO' &&
    `
    &:nth-child(5){
      
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }

  `}


  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
export const WrapperPagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`

export const WrapperButtonPagination = styled.div<DefaultProps & IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${({ isActive, theme }) =>
    isActive
      ? `${theme.palette.tertiary.dark}`
      : `${theme.palette.primary.lightest}`};

  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};

  border-radius: 100px;
`

export const Button = styled.button<DefaultProps & IStyledProps>`
  display: flex;
  color: ${({ isActive, theme }) =>
    isActive
      ? `${theme.palette.primary.light}`
      : `${theme.palette.text.light}`};
  border: none;
  background: none;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
