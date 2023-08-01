import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'
import { ILabelStyle } from '../Field/types'

export const Container = styled.div<DefaultProps>`
  width: 152px;
  height: 40px;
`

export const WrapperDate = styled.div<DefaultProps>`
  width: 152px;
  height: 47px;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.regular};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  cursor: pointer;
`

export const Label = styled.label<ILabelStyle>`
  color: ${({ labelColor }) => labelColor};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  ${({ margin }) => margin && `width: ${margin}%`}
`

export const WrapperIcon = styled.div<DefaultProps>`
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.palette.primary.regular};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const WrapperDatePicker = styled.div`
  height: 40px;
  margin: -45px 0 0 0px;
  position: absolute;
  z-index: 999;
`
