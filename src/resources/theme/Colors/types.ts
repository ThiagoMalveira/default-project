export interface IPaletteBrand {
  regular: string
  dark: string
  light: string
  lightest: string
}

export interface IPaletteGradienteBrand {
  darkest: string
  dark: string
}

export interface IPaletteGradiente {
  primary: IPaletteGradienteBrand
}

export interface IPalette {
  primary: IPaletteBrand
  secondary: IPaletteBrand
  tertiary: IPaletteBrand
  neutral: IPaletteBrand
  text: IPaletteBrand
  error: IPaletteBrand
  success: IPaletteBrand
  warning: IPaletteBrand
  info: IPaletteBrand
  gradiente: IPaletteGradiente
}
