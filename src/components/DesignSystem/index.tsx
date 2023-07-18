import { PropsWithChildren, ReactElement } from "react";
import { Global, ThemeProvider, css } from "@emotion/react";

import InterBlack from "@assets/fonts/Inter-Black.ttf";
import InterBold from "@assets/fonts/Inter-Bold.ttf";
import InterExtraBold from "@assets/fonts/Inter-ExtraBold.ttf";
import InterExtraLight from "@assets/fonts/Inter-ExtraLight.ttf";
import InterLight from "@assets/fonts/Inter-Light.ttf";
import InterMedium from "@assets/fonts/Inter-Medium.ttf";
import InterRegular from "@assets/fonts/Inter-Regular.ttf";
import InterSemiBold from "@assets/fonts/Inter-SemiBold.ttf";
import InterThin from "@assets/fonts/Inter-Thin.ttf";
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
        font-family: "InterBlack";
        src: local("InterBlack"), local("Inter-Black"),
          url(${InterBlack}) format("truetype");
      }

      @font-face {
        font-family: "InterBold";
        src: local("InterBold"), local("Inter-Bold"),
          url(${InterBold}) format("truetype");
      }

      @font-face {
        font-family: "InterExtraBold";
        src: local("InterExtraBold"), local("Inter-Extra-Bold"),
          url(${InterExtraBold}) format("truetype");
      }

      @font-face {
        font-family: "InterExtraLight";
        src: local("InterExtraLight"), local("Inter-Extra-Light"),
          url(${InterExtraLight}) format("truetype");
      }

      @font-face {
        font-family: "InterLight";
        src: local("InterLight"), local("Inter-Light"),
          url(${InterLight}) format("truetype");
      }

      @font-face {
        font-family: "InterMedium";
        src: local("InterMedium"), local("Inter-Medium"),
          url(${InterMedium}) format("truetype");
      }

      @font-face {
        font-family: "InterRegular";
        src: local("InterRegular"), local("Inter-Regular"),
          url(${InterRegular}) format("truetype");
      }

      @font-face {
        font-family: "InterSemiBold";
        src: local("InterSemiBold"), local("Inter-Semi-Bold"),
          url(${InterSemiBold}) format("truetype");
      }

      @font-face {
        font-family: "InterThin";
        src: local("InterThin"), local("Inter-Thin"),
          url(${InterThin}) format("truetype");
      }

      @font-face {
        font-family: "NeueMetanaRegular";
        src: local("NeueMetanaRegular"), local("NeueMetana-Regular"),
          url(${NeueMetanaRegular}) format("truetype");
      }
    `}
  />
);
