import { IStyleProps } from "./types";
import { DefaultProps } from "@resources/types";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Button = styled.button<IStyleProps & DefaultProps>`
  background: linear-gradient(
    237deg,
    ${({ theme }) => theme.palette.gradiente.primary.darkest} 0%,
    ${({ theme }) => theme.palette.gradiente.primary.dark} 100%
  );
  ${({ width }) => width && `width: ${width}px`};
  ${({ height }) => height && `height: ${height}px`};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fonts.normal};
  border: none;
  font-size: 14px;
  font-weight: bold;
  transition: 0.5s;
  border-radius: 100px;

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
