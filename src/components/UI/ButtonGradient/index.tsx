import Loading from "@components/Loading";

import { Button as StyledButton } from "./styles";
import { IViewProps } from "./types";
import { theme } from "@resources/theme";

const ButtonGradient = ({
  children,
  loading = false,
  disabled = false,
  height = 44,
  width = 0,
  widthFull = false,
  onClick,
  type,
  cursor,
}: IViewProps) => {
  return (
    <StyledButton
      bgColor={theme.palette.primary.dark}
      buttonTextColor={theme.palette.primary.light}
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
  );
};

export default ButtonGradient;
