import { ReactElement } from "react";
import { Global, css } from "@emotion/react";

import { theme } from "@resources/theme";

export const StyleGlobal = (): ReactElement => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
      }

      body {
        background: ${theme.palette.primary.light};
      }
    `}
  />
);
