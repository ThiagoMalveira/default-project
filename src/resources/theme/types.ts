import { IPalette } from "./Colors";
import { IFontsTypography } from "./Fonts";
import { ILayout } from "./Layout";

export interface ITheme {
  palette: IPalette;
  typography: IFontsTypography;
  layout: ILayout;
  mixins: any;
}
