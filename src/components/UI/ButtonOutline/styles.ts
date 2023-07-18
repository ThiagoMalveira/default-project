import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { IStyleProps } from "./types";
import { DefaultProps } from "@resources/types";

export const Button = styled.button<IStyleProps & DefaultProps>`
  ${({ theme }) => theme.mixins.shadow()};
  ${({ height }) => height && `height: ${height}px`};

  ${({ width }) => width && `width: ${width}px`};
  ${({ widthFull }) => widthFull && `width: 100%`};

  ${({ bgColor }) => bgColor && `background-color: ${bgColor}`};
  ${({ buttonTextColor }) => buttonTextColor && `color: ${buttonTextColor}`};
  padding: 0 15px;
  border-radius: 100px;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.regular}`};

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
      `;
    }}
  }
`;
