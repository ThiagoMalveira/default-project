import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  margin: 30px 0 0 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const Title = styled.h1<DefaultProps>`
  color: ${({ theme }) => theme.palette.info[5]};
`
