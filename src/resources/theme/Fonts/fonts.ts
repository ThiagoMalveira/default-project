import {
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightBold,
  IFontWeight,
  IFontFamily,
  IFontsTypography,
} from "./types";

const fontWeight: IFontWeight = {
  light: fontWeightLight,
  regular: fontWeightRegular,
  medium: fontWeightMedium,
  bold: fontWeightBold,
};

export const fonts: IFontFamily = {
  normal: 'Helvetica, "Trebuchet MS", Verdana, sans-serif',
  black: "InterBlack",
  bold: "InterBold",
  extraBold: "InterExtraBold",
  extraLight: "InterExtraLight",
  light: "InterLight",
  medium: "InterMedium",
  regular: "InterRegular",
  semiBold: "InterSemiBold",
  thin: "InterThin",
};

export const typography: IFontsTypography = {
  lineHeight: {
    tight: "100%",
    medium: "130%",
    loose: "150%",
    xLoose: "200%",
  },
  fontSize: {
    xxxsmall: 10,
    xxsmall: 12,
    xsmall: 14,
    small: 16,
    medium: 18,
    large: 20,
    xlarge: 24,
    xxlarge: 32,
  },
  fontWeight,
  fonts,
};
