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

export const WrapperTop = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
  align-items: center;
`

export const WrapperButton = styled.div`
  padding: 50px 0;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  @media (max-width: 1366px) {
    padding: 20px 0;
  }
`

export const WrapperGoBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperButtons = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-around;
  width: 100%;
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

export const WrapperDescriptionForm = styled.div`
  padding: 0 20px;
  width: 100%;
  display: flex;
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

export const WrapperTitleWithIcon = styled.div`
  display: flex;
  height: 50vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const WrapperTitle = styled.div`
  padding: 40px 0;
`

export const WrapperTitleForm = styled.div`
  padding: 20px;
`

export const WrapperDescription = styled.div`
  padding: 0 20px;
  max-width: 412px;
  width: 100%;
  display: flex;
`

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
`

export const ContainerProducts = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 25%;
  right: 30%;
  width: 1119px;
  height: 759px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 1366px) {
    top: 0.5%;
    right: 9%;
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

export const WrapperFieldsCommission = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px 30px;
`

export const WrapperIconsByStep = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`

export const StepLine = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  background-color: ${({ isActive, theme }) =>
    isActive ? `${theme.palette.warning.lightest}` : `#9B9B9B`};
  height: 2px;
  margin-bottom: 20px;
  width: 468px;
`

export const StepLineIcons = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  background-color: ${({ isActive }) => (isActive ? `#4BBA4F` : `#9B9B9B`)};
  height: 2px;
  margin: 0 10px;
  width: 468px;
`

export const WrapperButtonProducts = styled.div<DefaultProps>`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 20px 0;
`

export const WrapperIconWithText = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 290px;
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

export const ContainerForm = styled.div<DefaultProps>`
  display: flex;
  width: 1079px;
  height: 500px;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.palette.primary.lightest};
`

export const WrapperFields = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
`

export const WrapperPhotos = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`

export const ContainerProductsFour = styled.div<DefaultProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 35%;
  right: 42%;
  width: 462px;
  height: 407px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 1366px) {
    top: 20%;
    right: 30%;
  }
`

export const WrapperTitleModalFour = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80%;
  padding: 20px 0px;
`

export const WrapperTitleWithIconFour = styled.div`
  display: flex;
  height: 16vh;
  width: 80%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 1366px) {
    height: 25vh;
  }
`

export const WrapperTitleFour = styled.div`
  padding: 40px 0;
`

export const WrapperDescriptionFour = styled.div`
  padding: 0 20px;
  max-width: 412px;
  justify-content: center;
  width: 100%;
  display: flex;
`
