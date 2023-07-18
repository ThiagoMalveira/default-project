import { ReactNode } from "react";

export interface IStylesProps {
  height?: number;
  hide?: boolean;
  width?: number;
  isOpen?: boolean;
  alignFooter?: string;
  widthBtFooter?: string;
  marginBtFooter?: string;
  bgColor?: string | null | undefined;
  noBorder?: boolean;
  paddingBottom?: number;
}

export interface IProps {
  btCancelTitle?: string;
  btConfirmTitle?: string;
  btOutline?: boolean;
  show: boolean;
  onClose?: () => void | null;
  bgColor?: string | null | undefined;
  height?: number;
  width?: number;
  children: ReactNode | string;
  onCancel?: () => void;
  btCancelTitle?: string;
  onConfirm?: () => void;
  btConfirmTitle?: string;
  btConfirmDisabled?: boolean;
  alignVertical?: boolean;
  isLoading?: boolean;
  bottomView?: ReactNode | string;
}
