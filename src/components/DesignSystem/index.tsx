import { PropsWithChildren, ReactElement } from "react";
import { Global, ThemeProvider, css } from "@emotion/react";

import LatoBlack from "@assets/fonts/Lato-Black.ttf";
import LatoBold from "@assets/fonts/Lato-Bold.ttf";
import LatoExtraBold from "@assets/fonts/Lato-ExtraBold.ttf";
import LatoExtraLight from "@assets/fonts/Lato-ExtraLight.ttf";
import LatoLight from "@assets/fonts/Lato-Light.ttf";
import LatoMedium from "@assets/fonts/Lato-Medium.ttf";
import LatoRegular from "@assets/fonts/Lato-Regular.ttf";
import LatoSemiBold from "@assets/fonts/Lato-SemiBold.ttf";
import LatoThin from "@assets/fonts/Lato-Thin.ttf";
import NeueMetanaRegular from "@assets/fonts/NeueMetana-Regular.otf";
import { theme } from "@resources/theme";

export const DesignSystemProvider = ({
  children,
}: PropsWithChildren<unknown>): ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const StyleGlobal = (): ReactElement => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }

      body {
        background: white;
        font-family: Open-Sans, Helvetica, Sans-Serif;
      }

      @font-face {
        font-family: "LatoBlack";
        src: local("LatoBlack"), local("Lato-Black"),
          url(${LatoBlack}) format("truetype");
      }

      @font-face {
        font-family: "LatoBold";
        src: local("LatoBold"), local("Lato-Bold"),
          url(${LatoBold}) format("truetype");
      }

      @font-face {
        font-family: "LatoExtraBold";
        src: local("LatoExtraBold"), local("Lato-Extra-Bold"),
          url(${LatoExtraBold}) format("truetype");
      }

      @font-face {
        font-family: "LatoExtraLight";
        src: local("LatoExtraLight"), local("Lato-Extra-Light"),
          url(${LatoExtraLight}) format("truetype");
      }

      @font-face {
        font-family: "LatoLight";
        src: local("LatoLight"), local("Lato-Light"),
          url(${LatoLight}) format("truetype");
      }

      @font-face {
        font-family: "LatoMedium";
        src: local("LatoMedium"), local("Lato-Medium"),
          url(${LatoMedium}) format("truetype");
      }

      @font-face {
        font-family: "LatoRegular";
        src: local("LatoRegular"), local("Lato-Regular"),
          url(${LatoRegular}) format("truetype");
      }

      @font-face {
        font-family: "LatoSemiBold";
        src: local("LatoSemiBold"), local("Lato-Semi-Bold"),
          url(${LatoSemiBold}) format("truetype");
      }

      @font-face {
        font-family: "LatoThin";
        src: local("LatoThin"), local("Lato-Thin"),
          url(${LatoThin}) format("truetype");
      }

      @font-face {
        font-family: "NeueMetanaRegular";
        src: local("NeueMetanaRegular"), local("NeueMetana-Regular"),
          url(${NeueMetanaRegular}) format("truetype");
      }
    `}
  />
);
