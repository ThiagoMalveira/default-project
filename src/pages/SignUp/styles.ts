import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const WrapperForm = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;

  @media (max-width: 1366px) {
    height: 100vh;
  }
`

export const WrapperAnalysis = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const WrapperTop = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 520px;
  align-items: center;
  @media (max-width: 1366px) {
    padding: 10px;
  }
`

export const Container = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const WrapperTitle = styled.div`
  padding: 40px 0;

  @media (max-width: 1366px) {
    padding: 0;
  }
`

export const WrapperDescription = styled.div`
  padding: 20px 40px;

  max-width: 412px;
  width: 100%;
  display: flex;

  @media (max-width: 1366px) {
    padding: 10px 20px;
  }
`

export const WrapperFields = styled.div`
  padding: 20px 0;

  @media (max-width: 1366px) {
    padding: 0;
  }
`

export const StepLineIcons = styled.div<DefaultProps & { isActive: boolean }>`
  display: flex;
  background-color: ${({ isActive }) => (isActive ? `#4BBA4F` : `#9B9B9B`)};
  height: 2px;
  margin: 0 10px;
  width: 468px;
`

export const WrapperFieldRow = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: row;

  @media (max-width: 1366px) {
    padding: 10px 0;
  }
`

export const WrapperButton = styled.div`
  padding: 50px 0;

  @media (max-width: 1366px) {
    padding: 20px 0;
  }
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

  @media (max-width: 1366px) {
    display: none;
  }
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

export const WrapperGoBack = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
