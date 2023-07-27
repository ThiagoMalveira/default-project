import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'
import { StyleProps } from './types'

export const Container = styled.div<DefaultProps & StyleProps>`
  display: flex;
  width: 100vw;
  max-width: 1152px;
  height: 100vh;
  flex-direction: column;
  ${({ open }) => (open ? `max-height: 144px;` : `max-height: 60px;`)};
  border: 1px solid ${({ theme }) => theme.palette.neutral.lightest};
  border-radius: 10px;
`

export const WrapperTitle = styled.div<DefaultProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px 26px;
`

export const WrapperAnswer = styled.div<DefaultProps>`
  display: flex;
  padding: 0 25px;
`
