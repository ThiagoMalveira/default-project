import styled from '@emotion/styled'
import { theme } from '@resources/theme'
import { DefaultProps } from '@resources/types'
import { ILabelStyle } from '../Field/types'
import { FontType } from '../Typography'
import { IStyle, IStyleProps } from './types'

const backgroundColors = {
  APROVADO: 'rgba(75, 186, 79, 0.15)',
  PENDENTE: 'rgba(254, 161, 52, 0.1)',
  REPROVADO: 'rgb(213, 85, 85, 0.1)',
}

const textColors = {
  APROVADO: theme.palette.success.regular,
  PENDENTE: theme.palette.warning.regular,
  REPROVADO: theme.palette.error.regular,
}

export const Container = styled.div`
  background: transparent;
`

export const Select = styled.select<IStyle & DefaultProps & IStyleProps>`
  ${({ theme }) => theme.mixins.fonts(FontType.regular)};
  display: flex;
  background-color: ${({ value }) => backgroundColors[value]};
  justify-content: center;
  border: 0px;
  border-bottom: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-radius: 100px;
  padding: 6px 10px;
  font-size: 12px;
  width: ${({ inputWidth }) => (inputWidth ? `${inputWidth}px` : '10px')};
  height: ${({ inputHeight }) => `${inputHeight}px`};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ value }) => textColors[value]};
  gap: 10px;
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
