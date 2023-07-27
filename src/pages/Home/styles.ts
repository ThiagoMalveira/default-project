import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  margin: 0 0 0 0;
  width: 100%;
`
export const ContainerContent = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0 300px;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  height: 100vh;
  max-height: 660px;

  @media (max-width: 1818px) {
    padding: 0 0;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 482px;
  width: 100%;
  margin: 10px 0;
`

export const WrapperIconSlider = styled.div<DefaultProps>`
  height: 96px;
  width: 96px;
`

export const WrapperIcon = styled.div<DefaultProps>`
  height: 96px;
  width: 96px;
  left: calc(100% - 10%);
  position: absolute;
`

export const ContainerWhatsApp = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`

export const ContainerTitle = styled.div`
  display: flex;
  padding: 60px 60px;
  align-items: center;
  max-width: 625px;
  justify-content: center;
  text-align: center;
`

export const ContainerTextLighter = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContentsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 482px;
  width: 482px;
`

export const ContainerStep = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutral.light};
`

export const ContainerPartners = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const ContainerPartnersImage = styled.div`
  display: flex;
  max-width: 1200px;
  align-items: center;
  justify-content: center;
`

export const Image = styled.img`
  padding: 10px 40px;
`

export const ImageSLA = styled.img`
  padding: 50px 0px 50px 50px;
`

export const ImageChannel = styled.img`
  padding: 0px 10px;
`

export const ImageBePartner = styled.img`
  padding: 0px 10px;
`

export const ContainerWhatPartnersSays = styled.div`
  padding: 74px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerBePartner = styled.div<DefaultProps>`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.dark};
  max-height: 521px;
  height: 100vh;
  flex-direction: row;
  padding: 50px 70px;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;
`

export const ContainerTitleWhatPartnersSays = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;
`

export const ContainerContentWhatPartnersSays = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;
`

export const ContainerSLAInside = styled.div<DefaultProps>`
  display: flex;
  border-radius: 20px;
  height: 600px;
  width: 100vw;
  justify-content: space-evenly;
  box-shadow: 0px 15px 30px 0px #e6ddc5;
  background: linear-gradient(
    237deg,
    ${({ theme }) => theme.palette.gradiente.primary.darkest} 0%,
    ${({ theme }) => theme.palette.gradiente.primary.dark} 100%
  );
`

export const ContainerTextChannel = styled.div<DefaultProps>`
  max-width: 441px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerTextPartner = styled.div<DefaultProps>`
  max-width: 478px;
  padding: 20px 170px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerQuestions = styled.div<DefaultProps>`
  display: flex;
  padding: 50px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const WrapperQuestions = styled.div<DefaultProps>``

export const WrapperTextBePartner = styled.div<DefaultProps>`
  max-width: 372px;
  width: 100vw;
`

export const ContainerTextSLA = styled.div<DefaultProps>`
  max-width: 510px;
  width: 100vw;
  display: flex;
  padding: 100px;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ContainerChannel = styled.div<DefaultProps>`
  max-height: 508px;
  height: 508px;
  flex-direction: row;
  padding: 50px 70px;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.palette.primary.lightest};
`

export const ContainerSLA = styled.div<DefaultProps>`
  padding: 80px 370px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerAllImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 0;
`

export const AllTextsLighter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  justify-content: center;
  align-items: flex-start;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const WrapperButton = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 20px 0;
`

export const WrapperTitleQuestions = styled.div`
  display: flex;
  align-items: center;
`
