import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'
import { IPropsStyle } from './types'

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

export const WrapperFilters = styled.div<DefaultProps>`
  background-color: ${({ theme }) => theme.palette.primary.lightest};
  display: flex;
  border-radius: 10px;
  width: 85vw;
  margin: 20px 0 20px 330px;
  padding: 20px;

  @media (max-width: 1366px) {
    margin: 0px 0px 10px 20px;
  }
`

export const WrapperCard = styled.div<DefaultProps>`
  display: flex;
  width: 85vw;
  margin-top: 15px;
`

export const ContainerFilter = styled.div<IPropsStyle & DefaultProps>`
  display: flex;
  padding: 10px 0px;

  ${({ filter, theme }) =>
    filter === 'ENVIADAS' &&
    `
    &:nth-child(1) {
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }
    `}

  ${({ filter, theme }) =>
    filter === 'MANUAIS' &&
    `
    &:nth-child(3){
      
      border-bottom: 1px solid ${theme.palette.warning.lightest};
    }

  `}

  &:hover {
    cursor: pointer;
    opacity: 0.8;
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

export const ContainerManualTable = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  top: 15%;
  right: 37%;
  width: 1368px;
  height: 720px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 1366px) {
    align-items: center;
    justify-content: flex-start;
    width: 1117px;
    height: 566px;
    top: 22%;
    right: 6%;
  }
`

export const ContainerTable = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: 0 80px;
  height: 30vh;

  @media (max-width: 1366px) {
    padding: 0 30px;
  }
`

export const WrapperButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0;
  width: 100%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
