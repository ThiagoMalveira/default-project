import { css, keyframes } from "@emotion/react";

import { theme } from "@resources/theme";

type Css = ReturnType<typeof css>;

export default {
  skeletonKeyFrames: () => keyframes`
    0% {
      opacity: 0.1;
      background-color: ${theme.palette.neutral.regular};
    }
    25% {
      opacity: 0.2;
      background-color: ${theme.palette.neutral.regular};
    }
    50% {
      opacity: 0.4;
      background-color: ${theme.palette.neutral.regular};
    }
    75% {
      opacity: 0.2;
      background-color: ${theme.palette.neutral.regular};
    }
    100% {
      opacity: 0.1;
      background-color: ${theme.palette.neutral.regular};
    }
  `,

  transition: (time = "0.25s") => css`
    -webkit-transition: all ${time};
    -moz-transition: all ${time};
    transition: all ${time};
  `,

  transitionIn: (type = "all", time = "0.25s") => css`
    -webkit-transition: ${type} ${time};
    -moz-transition: ${type} ${time};
    transition: ${type} ${time};
  `,

  ellipsis: () => css`
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    max-width: 100%;
    overflow: hidden;
    line-height: 1rem;
  `,

  disabledStyle: (disabled = false) => css`
    opacity: ${disabled ? 0.6 : ""};
    cursor: ${disabled && `default`};
  `,

  shadow: () => css`
    box-shadow: 0px -9.14237px 27.4271px rgba(0, 0, 0, 0.2);
  `,

  secondaryShadow: () => css`
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  `,

  gradient: (type): Css =>
    ({
      primary: css`
        background-image: linear-gradient(
          180deg,
          ${theme.palette.gradiente.primary.light},
          ${theme.palette.gradiente.primary.dark},
          ${theme.palette.gradiente.primary.darkest}
        );
      `,
      secondary: css`
        background-image: linear-gradient(
          180deg,
          ${theme.palette.gradiente.primary.light},
          ${theme.palette.gradiente.primary.dark},
          ${theme.palette.gradiente.primary.darkest}
        );
      `,
      tertiary: css`
        background-image: linear-gradient(
          180deg,
          ${theme.palette.gradiente.tertiary.light},
          ${theme.palette.gradiente.tertiary.darkest}
        );
      `,
    }[type]),

  fonts: (type): Css =>
    ({
      extraBold: css`
        font-family: ${theme.typography.fonts.extraBold};
        font-size: 18px;
        line-height: 24px;
        color: ${theme.palette.primary.regular};
      `,
      black: css`
        font-family: ${theme.typography.fonts.black};
        font-size: 18px;
        line-height: 24px;
        color: ${theme.palette.primary.regular};
      `,
      bold: css`
        font-family: ${theme.typography.fonts.bold};
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: ${theme.palette.primary.regular};
      `,
      semiBold: css`
        font-family: ${theme.typography.fonts.semiBold};
        font-size: 18px;
        line-height: 24px;
        letter-spacing: 0.07em;
        color: ${theme.palette.primary.regular};
      `,
      medium: css`
        font-family: ${theme.typography.fonts.medium};
        font-size: 16px;
        line-height: 24px;
        color: ${theme.palette.neutral.darkest};
      `,
      regular: css`
        font-family: ${theme.typography.fonts.regular};
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.02em;
        color: ${theme.palette.neutral.darkest};
      `,
      light: css`
        font-family: ${theme.typography.fonts.light};
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: ${theme.palette.neutral.darkest};
      `,
      extraLight: css`
        font-family: ${theme.typography.fonts.extraLight};
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: ${theme.palette.neutral.darkest};
      `,
      thin: css`
        font-family: ${theme.typography.fonts.thin};
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.02em;
        color: ${theme.palette.neutral.darkest};
      `,
    }[type]),

  button: (type): Css =>
    ({
      primary: css``,
      secondary: css``,
    }[type]),
};
