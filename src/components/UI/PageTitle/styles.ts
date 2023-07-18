import styled from "@emotion/styled";

import { IViewProps } from "./types";

export const Title = styled.span<IViewProps>`
  color: ${({ theme, color }) => color || theme.palette.info.dark};
  ${({ theme }) => theme.mixins.fonts("title")};
  ${({ size }) => size && `font-size: ${size}px !important`};
`;
