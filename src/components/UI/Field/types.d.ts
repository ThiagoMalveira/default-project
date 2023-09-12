export interface IViewProps {
  inputWidth?: number
  inputHeight?: number
  widthFull?: boolean
  maxLength?: number
  borderColor?: string

  error?: boolean
  labelTop?: string
  labelLeft?: string
  labelRight?: string

  placeholderColor?: string
  fontSize?: number
  fontWeight?: string

  marginInputTop?: number
  marginInputLeft?: number
  marginInputRight?: number

  labelColor?: string
  textInputColor?: string
  backgroundInputColor?: string

  maxLength?: number
  name?: string | undefined
  onChange?: (e) => any
  placeholder?: string
  type?: string
  value?:
    | ((string | number | null) & (string | number | readonly string[]))
    | undefined
  testID?: string | undefined
  onBlur?: (event?: MouseEvent<Event>) => void
  secondary?: boolean

  focus?: boolean
  color?: string
  inputRef?: any

  currency?: boolean
  secondary?: boolean
  tertiary?: boolean
  disabled?: boolean
  disabled?: boolean

  errorMessage?: string | undefined
}

export interface ILabelStyle {
  labelColor: string
  margin?: number
}
export interface IinputStyle {
  textColor?: string
  backgroundColor?: string
  placeholderColor?: string
  borderColor?: string
  inputWidth: number
  inputHeight: number
  widthFull: boolean
  fontSize?: number
  fontWeight?: string
}
