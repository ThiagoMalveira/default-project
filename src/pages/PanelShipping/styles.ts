import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'
import { IPropsStyle } from './types'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`

export const WrapperButtonAddNewTable = styled.div`
  display: flex;
  width: 60vw;
  justify-content: flex-end;
`

export const ContainerModalShipping = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 25%;
  right: 40%;
  width: 549px;
  height: 578px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 1366px) {
    top: 10%;
    right: 30%;
  }
`

export const WrapperTitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 20px 0px;
`

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperTable = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const WrapperManualTable = styled.div<DefaultProps>`
  display: flex;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperButtonShipping = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 20px 0;
`

export const WrapperButtonCancelShipping = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 20px 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ContainerModalAddLine = styled.div<DefaultProps>`
  display: flex;
  width: 549px;
  height: 578px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 25%;
  right: 40%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 1366px) {
    top: 10%;
    right: 30%;
  }
`

export const WrapperFormLine = styled.div`
  display: flex;
  flex-direction: column;
`

export const WrapperFields = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const WrapperShippingCompany = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
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
    padding: 20px 20px;
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

  @media (max-width: 1366px) {
    padding: 0;
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
  top: 20%;
  right: 23%;
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
