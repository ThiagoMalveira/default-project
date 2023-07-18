import styled from "@emotion/styled";

import { Fonts } from "@resources/types/mixins";

import { IViewProps } from "./types";

const Typography = styled.span<IViewProps>`
  ${({ theme, fontType }) => theme.mixins.fonts(fontType || Fonts.regular)};

  ${({ color }) => color && `color: ${color}`};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  text-align: ${({ align }) => align || "left"};
  ${({ letterSpacing }) => letterSpacing && `letter-spacing:${letterSpacing}`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ fontFamily }) => fontFamily && `font-family: ${fontFamily}`};
  ${({ size }) => size && `font-size: ${size}px`};
  ${({ weight }) => weight && `font-weight: ${weight}`};
`;

export default Typography;
export { Fonts as FontType };
