import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'

export const Container = styled.div`
  margin: 0 0 0 0;
  max-width: 280px;
  padding: 60px 40px;
`

export const Step = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 35px 0px;
  justify-content: center;
`

export const Description = styled.div`
  display: flex;
`

export const WrapperIcon = styled.div<DefaultProps>`
  display: flex;
  width: 107px;
  height: 107px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.neutral.dark};
  align-items: center;
  justify-content: center;
`

export const AlignIcon = styled.div<DefaultProps>`
  display: flex;
  justify-content: center;
`
