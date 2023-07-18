export interface IPaletteBrand {
  regular: string;
  darkest: string;
  dark: string;
  light: string;
  lightest: string;
}

export interface IPaletteGradienteBrand {
  darkest: string;
  dark: string;
  light: string;
}

export interface IPaletteGradiente {
  primary: IPaletteGradienteBrand;
  secondary: IPaletteGradienteBrand;
  tertiary: IPaletteGradienteBrand;
}

export interface IPalette {
  primary: IPaletteBrand;
  secondary: IPaletteBrand;
  neutral: IPaletteBrand;
  error: IPaletteBrand;
  success: IPaletteBrand;
  warning: IPaletteBrand;
  info: IPaletteBrand;
  gradiente: IPaletteGradiente;
}
