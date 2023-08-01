import styled from '@emotion/styled'

export const WrapperForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
`

export const Container = styled.div`
  margin: 0 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
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

export const WrapperFields = styled.div`
  padding: 20px 0;
`

export const WrapperFieldRow = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: row;
`

export const WrapperButton = styled.div`
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

export const WrapperIcons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 650px;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
  &:after {
    content: '';
    width: 100%;
    max-width: 500px;
    border-bottom: 1px solid #ccc;
    position: absolute;
    top: 223px;
    z-index: -9999;
  }
`
