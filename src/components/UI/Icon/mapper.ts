import { typeIcons } from "./types";
import { dashboardSVG, logoSVG, whatsAppSVG } from "./styles";

export const mapIcons = [
  {
    name: "logo",
    type: typeIcons.SVG,
    element: logoSVG,
    dimensions: {
      width: 208,
      height: 90,
    },
  },
  {
    name: "dashboard",
    type: typeIcons.SVG,
    element: dashboardSVG,
    dimensions: {
      width: 1051,
      height: 741,
    },
  },
  {
    name: "whatsapp",
    type: typeIcons.SVG,
    element: whatsAppSVG,
    dimensions: {
      width: 96,
      height: 96,
    },
  },
];
