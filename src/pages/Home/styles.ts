import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const ContainerSLAInside = styled.div<DefaultProps>`
  display: flex;
  border-radius: 20px;
  height: 100vh;
  max-height: 600px;
  width: 100vw;
  max-width: 1366px;
  justify-content: space-evenly;
  box-shadow: 0px 15px 30px 0px #e6ddc5;
  background: linear-gradient(
    237deg,
    ${({ theme }) => theme.palette.gradiente.primary.darkest} 0%,
    ${({ theme }) => theme.palette.gradiente.primary.dark} 100%
  );

  @media (max-width: 480px) {
    flex-direction: column;
    max-height: 1200px;
    padding: 20px;
    max-width: 80vw;
  }

  @media (max-width: 1366px) {
    max-width: 90vw;
  }
`

export const ContainerSLA = styled.div<DefaultProps>`
  padding: 80px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;

  @media (max-width: 1366px) {
    width: 98vw;
  }

  @media (max-width: 480px) {
    padding: 70px 0px;
  }
`

export const ContainerTextSLA = styled.div<DefaultProps>`
  max-width: 510px;
  width: 100vw;
  display: flex;
  padding: 100px;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 480px) {
    padding: 0;
    align-items: center;
    max-width: 350px;
    text-align: center;
  }

  @media (max-width: 1366px) {
    padding: 20px;
  }
`

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

  @media (max-width: 480px) {
    flex-direction: column;
    max-height: 500px;
  }
`

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 482px;
  width: 100vw;
  margin: 10px 0;

  @media (max-width: 480px) {
    align-items: center;
  }
`

export const WrapperIconSlider = styled.div<DefaultProps>`
  height: 96px;
  width: 96px;

  @media (max-width: 480px) {
    display: none;
  }
`

export const WrapperIcon = styled.div<DefaultProps>`
  height: 96px;
  width: 96px;
  left: calc(100% - 10%);
  position: absolute;

  @media (max-width: 480px) {
    left: calc(100% - 30%);
  }
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
  width: 100vw;
  @media (max-width: 480px) {
    max-width: 100vw;
    align-items: center;
  }
`

export const ContainerStep = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutral.light};

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerPartners = styled.div`
  padding: 48px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 480px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    max-height: 653px;
    padding: 20px 35px;
  }
`

export const ContainerTitleWhatPartnersSays = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 0 0 45px 0px;
  }
`

export const ContainerContentWhatPartnersSays = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1280px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

export const ContainerTextChannel = styled.div<DefaultProps>`
  max-width: 441px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ContainerTextPartner = styled.div<DefaultProps>`
  max-width: 478px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;

  @media (max-width: 480px) {
    max-width: 350px;
    align-items: center;
  }
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

  @media (max-width: 480px) {
    max-width: 350px;
  }
`

export const ContainerChannel = styled.div<DefaultProps>`
  max-height: 508px;
  height: 100vh;
  flex-direction: row;
  padding: 50px 70px;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;
  background: ${({ theme }) => theme.palette.primary.lightest};

  @media (max-width: 480px) {
    flex-direction: column;
    max-height: 672px;
  }
`

export const ContainerAllImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 0;

  @media (min-width: 481px) and (max-width: 767px) {
    display: none;
  }
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
  @media (max-width: 480px) {
    display: none;
  }
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
