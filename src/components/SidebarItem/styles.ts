import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div<DefaultProps>`
  display: flex;
  align-items: center;
  background-color: transparent;
  font-size: 20px;
  color: #9b9b9b;
  padding: 10px;
  cursor: pointer;
  border-radius: 100px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;

    background: linear-gradient(
      152deg,
      #424141 0%,
      rgba(66, 65, 65, 0.71) 100%
    );
    color: #cab780;
  }
`
