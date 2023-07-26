import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { DefaultProps } from '@resources/types'
import { IStyleProps } from './types'

export const Button = styled.button<IStyleProps & DefaultProps>`
  ${({ theme }) => theme.mixins.shadow()};
  ${({ height }) => height && `height: ${height}px`};

  ${({ width }) => width && `width: ${width}px`};
  ${({ widthFull }) => widthFull && `width: 100%`};

  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
  ${({ buttonTextColor }) => buttonTextColor && `color: ${buttonTextColor}`};
  padding: 0 15px;
  ${({ borderRadius }) =>
    (borderRadius && `border-radius: ${borderRadius}px`) || '6px'};
  border: ${({ outline, theme }) =>
    outline ? `2px solid ${theme.palette.primary.dark}` : 'none'};

  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fonts.normal};
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;

    ${({ theme }) => {
      return css`
        li a: {
          color: ${theme.palette.secondary.dark};
        }
      `
    }}
  }
`
