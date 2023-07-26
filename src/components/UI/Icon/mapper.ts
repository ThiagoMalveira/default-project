import {
  dashboardSVG,
  documentSVG,
  logoSVG,
  moneySVG,
  productsSVG,
  upSVG,
  whatsAppSVG,
} from './styles'
import { typeIcons } from './types'

export const mapIcons = [
  {
    name: 'logo',
    type: typeIcons.SVG,
    element: logoSVG,
    dimensions: {
      width: 208,
      height: 90,
    },
  },
  {
    name: 'dashboard',
    type: typeIcons.SVG,
    element: dashboardSVG,
    dimensions: {
      width: 1051,
      height: 741,
    },
  },
  {
    name: 'whatsapp',
    type: typeIcons.SVG,
    element: whatsAppSVG,
    dimensions: {
      width: 96,
      height: 96,
    },
  },
  {
    name: 'document',
    type: typeIcons.SVG,
    element: documentSVG,
    dimensions: {
      width: 40,
      height: 40,
    },
  },
  {
    name: 'products',
    type: typeIcons.SVG,
    element: productsSVG,
    dimensions: {
      width: 40,
      height: 40,
    },
  },
  {
    name: 'up',
    type: typeIcons.SVG,
    element: upSVG,
    dimensions: {
      width: 40,
      height: 40,
    },
  },
  {
    name: 'money',
    type: typeIcons.SVG,
    element: moneySVG,
    dimensions: {
      width: 40,
      height: 40,
    },
  },
]
