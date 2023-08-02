import styled from '@emotion/styled'
import { DefaultProps } from '@resources/types'
import { ILabelStyle } from '../Field/types'
import { FontType } from '../Typography'
import { IStyle } from './types'

export const Container = styled.div`
  background: transparent;
`

export const Select = styled.select<IStyle & DefaultProps>`
  ${({ theme }) => theme.mixins.fonts(FontType.regular)};
  display: flex;
  background: ${({ backgroundColor }) => backgroundColor};
  justify-content: center;
  border: 0px;
  border-bottom: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-radius: 0px;
  padding: 2px;
  font-size: 12px;
  width: ${({ inputWidth }) => (inputWidth ? `${inputWidth}px` : '10px')};
  height: ${({ inputHeight }) => `${inputHeight}px`};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ textColor }) => textColor};
  text-transform: ${({ textTransform }) => textTransform};
`

export const Label = styled.label<ILabelStyle>`
  color: ${({ labelColor }) => labelColor};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  ${({ margin }) => margin && `width: ${margin}%`}
`

export const Option = styled.option``
