import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  width: 150px;
  height: 140px;
  flex-direction: column;
  border: 1px dashed #9b9b9b;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const WrapperText = styled.div`
  display: flex;
`
