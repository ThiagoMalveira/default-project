import styled from '@emotion/styled'

import { FontType } from '@components/UI/Typography'
import { DefaultProps } from '@resources/types'
import { ILabelStyle, IinputStyle } from './types'

export const Container = styled.div`
  background: transparent;
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
`

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input<DefaultProps & IinputStyle>`
  ${({ theme }) => theme.mixins.fonts(FontType.regular)};
  background: ${({ backgroundColor }) => backgroundColor};
  border: 0px;
  border-bottom: ${({ borderColor }) => `1px solid ${borderColor}`};
  font-size: 12px;
  height: ${({ inputHeight }) => `${inputHeight}px`};
  padding: 0 8px;
  width: ${({ inputWidth, widthFull }) =>
    widthFull ? '100%' : `${inputWidth}px`};
  color: ${({ textColor }) => textColor};

  :-ms-input-placeholder,
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`

export const Label = styled.label<ILabelStyle>`
  color: ${({ labelColor }) => labelColor};
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  ${({ margin }) => margin && `width: ${margin}%`}
`
