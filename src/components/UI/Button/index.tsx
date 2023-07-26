import Loading from '@components/Loading'

import { theme } from '@resources/theme'
import { Button as StyledButton } from './styles'
import { IViewProps } from './types'

const Button = ({
  children,
  loading = false,
  disabled = false,
  height = 44,
  width = 0,
  widthFull = false,
  onClick,
  type,
  cursor,
  bgColor,
  buttonTextColor,
  borderRadius,
}: IViewProps) => {
  return (
    <StyledButton
      bgColor={bgColor || theme.palette.primary.dark}
      buttonTextColor={buttonTextColor || theme.palette.primary.light}
      borderRadius={borderRadius}
      disabled={disabled}
      height={height}
      type={type}
      onClick={onClick}
      width={width}
      widthFull={widthFull}
      cursor={cursor}
    >
      {loading ? (
        <Loading size={20} color={theme.palette.primary.light} />
      ) : (
        children
      )}
    </StyledButton>
  )
}

export default Button
