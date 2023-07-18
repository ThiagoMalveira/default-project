export enum DeviceType {
  mobile = "mobile",
  desktop = "desktop",
  tablet = "tablet",
}

export interface IDevices {
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface IMainStyling {
  body: {
    margin: string | number;
    padding: string | number;
    fontFamily: string;
    webkitFontSmoothing: string;
    mozOsxFontSmoothing: string;
  };
}

export interface ISizeBrand {
  minWidth: string | number;
  maxWidth: string | number;
  width: string | number;
  heignt: string | number;
  margin: string | number;
  padding: string | number;
  fontSize: string | number;
}

export interface ISizes {
  small: ISizeBrand;
  medium: ISizeBrand;
  large: ISizeBrand;
  full: ISizeBrand;
}

export interface IDimensions {
  size: string;
  dimensions: ISizes;
}

export interface ILayout {
  [DeviceType.desktop]: IDimensions;
  [DeviceType.tablet]: IDimensions;
  general: IMainStyling;
}
