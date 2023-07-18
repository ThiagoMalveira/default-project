export enum typeIcons {
  SVG = "svg",
  PNG = "png",
}

export interface IViewProps {
  element: any;
  dimensions: IDimensionsProps;
  onCallback?: () => void | null;
  title?: string;
}

export interface IProps {
  title?: string;
  name: string;
  sizes?: string[];
  color?: string;
  width?: number;
  height?: number;
  onCallback?: () => void | null;
}

export interface IStyleProps {
  height: number;
  width: number;
}

export interface IDimensionsProps {
  width: number | string;
  height: number | string;
}
