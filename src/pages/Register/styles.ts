import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  display: flex;
`

export const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
`

export const WrapperFormBank = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 12vh;
`

export const WrapperTop = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
  align-items: center;
`

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 650px;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
`

export const WrapperStep = styled.div`
  display: flex;
  width: 96px;
  padding: 6px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: rgba(237, 222, 171, 0.5);
`

export const WrapperTitleWithIcon = styled.div`
  display: flex;
  height: 16vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const WrapperTitle = styled.div`
  padding: 40px 0;
`

export const WrapperDescription = styled.div`
  padding: 20px 40px;
  max-width: 412px;
  width: 100%;
  display: flex;
`

export const StepLineIcons = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  background-color: ${({ isActive }) => (isActive ? `#4BBA4F` : `#9B9B9B`)};
  height: 2px;
  margin: 0 10px;
  width: 468px;
`

export const WrapperDescriptionBank = styled.div`
  padding: 20px 40px;
  max-width: 447px;
  width: 100%;
  display: flex;
`

export const WrapperCards = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
`

export const ContainerModalContract = styled.div<DefaultProps>`
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

export const WrapperButtonShipping = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-between;
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

export const WrapperShippingCompany = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.palette.info.lightest};
  width: 80%;
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
  background-color: ${({ theme }) => theme.palette.primary.lightest};
`

export const ContainerManualTable = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 25%;
  right: 30%;
  width: 1368px;
  height: 720px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};
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

export const ContainerTable = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  padding: 0 80px;
  height: 30vh;
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

export const WrapperFieldsBank = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerBankAccount = styled.div<DefaultProps>`
  display: flex;
  width: 549px;
  height: 492px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 25%;
  right: 40%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};
`
