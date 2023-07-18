import { useTheme } from "@emotion/react";

import { DefaultProps } from "@resources/types";

import Loading from "@components/Loading";

import { Button as StyledButton } from "./styles";
import { IViewProps } from "./types";

const Button = ({
  children,
  loading = false,
  disabled = false,
  height = 44,
  outline = false,
  secondary = false,
  width = 0,
  widthFull = false,
  onClick,
  type,
  cursor,
}: IViewProps) => {
  const theme: DefaultProps | any = useTheme();

  const statusTheme = (disabled && "disabled") || "active";
  const themeActive =
    theme.palette.button[
      (outline && "outline") || (secondary && "secondary") || "primary"
    ][statusTheme];

  return (
    <StyledButton
      bgColor={themeActive.background}
      buttonTextColor={themeActive.color}
      disabled={disabled}
      height={height}
      type={type}
      onClick={onClick}
      outline={outline}
      width={width}
      widthFull={widthFull}
      cursor={cursor}
    >
      {loading ? <Loading size={20} color={themeActive.loading} /> : children}
    </StyledButton>
  );
};

export default Button;
