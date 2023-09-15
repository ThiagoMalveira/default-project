import styled from '@emotion/styled'
import { IStyledProps } from '@pages/OperatorPartners/types'
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

export const ContainerDataGrid = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 93vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.palette.primary.lightest};

  @media (max-width: 1366px) {
    height: 85vh;
    width: 100vw;
  }
`

export const WrapperFilters = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.lightest};
  display: flex;
  border-radius: 10px;
  width: 80vw;
  margin: 20px 0 20px 330px;
  padding: 20px;

  @media (max-width: 1366px) {
    margin: 0px 0px 10px 60px;
    padding: 0;
  }
`

export const ContainerFilter = styled.div<DefaultProps>`
  display: flex;
  padding: 10px 0px;
  align-items: center;

  @media (max-width: 1366px) {
    width: 1200px;
  }
`

export const WrapperText = styled.div<DefaultProps>`
  display: flex;

  @media (max-width: 1366px) {
    width: 300px;
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

  @media (max-width: 1366px) {
    margin: 0 0px 0 60px;
    height: 65vh;
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
      : `${theme.palette.primary.light}`};

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

export const WrapperButton = styled.div<DefaultProps>`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  padding: 20px 0;
`
