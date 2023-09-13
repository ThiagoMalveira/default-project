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

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 650px;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;

  @media (max-width: 1366px) {
    padding: 20px 0;
  }
`

export const StepLineIcons = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  background-color: ${({ isActive }) => (isActive ? `#4BBA4F` : `#9B9B9B`)};
  height: 2px;
  margin: 0 10px;
  width: 468px;
`

export const WrapperTitleWithIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const WrapperTitle = styled.div`
  padding: 40px 0;

  @media (max-width: 1366px) {
    padding: 20px 0;
  }
`

export const WrapperDescription = styled.div`
  padding: 20px 40px;
  max-width: 412px;
  width: 100%;
  display: flex;
`

export const Image = styled.img`
  padding: 10px 40px;
`

export const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
`

export const WrapperButton = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
  width: 80%;
  padding: 20px 0;
`

export const WrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  height: 65vh;
`
