import styled from '@emotion/styled'
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

export const ContainerProducts = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};
`

export const WrapperTitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 89%;
  padding: 20px 0px;

  @media (max-width: 1366px) {
    width: 89%;
  }
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

export const WrapperIconsByStep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  width: 90%;
  justify-content: space-between;

  @media (max-width: 1366px) {
    margin: 20px 0;
    width: 90%;
  }
`

export const WrapperIconWithText = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
`

export const WrapperIconStep = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme.palette.tertiary.dark}` : `#9B9B9B`};

  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
`

export const StepLine = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme.palette.warning.lightest}` : `#9B9B9B`};
  height: 2px;
  margin-bottom: 20px;
  width: 468px;
`

export const ContainerForm = styled.div<DefaultProps>`
  display: flex;
  width: 1079px;
  height: 500px;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
`

export const WrapperTitleForm = styled.div`
  padding: 20px;
`

export const WrapperFields = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`

export const WrapperDescription = styled.div`
  padding: 0 20px;
  max-width: 412px;
  width: 100%;
  display: flex;
`

export const WrapperPhotos = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`

export const WrapperButtonCancelProducts = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 20px 0;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperButtonProducts = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 20px 0;
`

export const WrapperFieldsCommission = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 30px;
`

export const WrapperDescriptionForm = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
`

export const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 85%;
  padding: 0 20px;
`
