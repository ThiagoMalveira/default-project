export const fontWeightLight = 400;
export const fontWeightRegular = 500;
export const fontWeightMedium = 600;
export const fontWeightBold = 700;

export interface IFontLineHeight {
  tight: string;
  medium: string;
  loose: string;
  xLoose: string;
}

export interface IFontSizes {
  xxxsmall: number;
  xxsmall: number;
  xsmall: number;
  small: number;
  medium: number;
  large: number;
  xlarge: number;
  xxlarge: number;
}

export interface IFontWeight {
  regular: number;
  medium: number;
  bold: number;
  light: number;
}

export interface IFontFamily {
  normal: string;
  black: string;
  bold: string;
  extraBold: string;
  extraLight: string;
  light: string;
  medium: string;
  regular: string;
  semiBold: string;
  thin: string;
}

export interface IFontsTypography {
  lineHeight: IFontLineHeight;
  fontSize: IFontSizes;
  fontWeight: IFontWeight;
  fonts: IFontFamily;
}
