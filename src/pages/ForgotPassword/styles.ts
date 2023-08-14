import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const ContainerBack = styled.div`
  display: flex;
  align-items: flex-start;
  max-height: 128px;
  max-width: 50%;
  width: 100%;
  height: 100%;
`

export const WrapperTitle = styled.div`
  padding: 60px 0;
`

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50%;
  height: 100vh;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const WrapperGoBack = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperButton = styled.div`
  padding: 50px 0;
`

export const WrapperField = styled.div`
  padding: 20px 0;
`
