import { ReactElement, ReactText } from "react";

import { DefaultProps } from "@resources/types";

export interface IViewProps extends DefaultProps {
  children?: ReactElement | ReactText | string;
  color?: string;
  size?: number;
}
