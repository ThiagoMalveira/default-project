import styled from '@emotion/styled'

import CurrencyInputLib from 'react-currency-input-field'

import { DefaultProps } from '@resources/types'
import { FontType } from '@components/UI/Typography'

export const Container = styled.div``

export const Label = styled.label<DefaultProps>`
  color: ${({ theme }) => theme.palette.info.light};
  font-size: 13px;
  font-weight: bold;
  line-height: 16px;
`
export const CurrencyInput = styled(CurrencyInputLib)<DefaultProps>`
  background: transparent;
  border: 0px;
  outline: none;
  padding: 0;
  max-width: 150px;
  ${({ theme }) => theme.mixins.fonts(FontType.medium)}
  font-size: 22px;

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.palette.info.light};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.palette.info.light};
  }

  ::placeholder {
    color: ${({ theme }) => theme.palette.info.light};
  }
`
