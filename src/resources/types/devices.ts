export const sizes = {
  mobile: {
    min: '',
    max: '767px',
  },
  tablet: {
    min: '768px',
    max: '1023px',
  },
  desktop: {
    min: '1024px',
    max: '1440px',
  },
}

export const mediaQuerydevices = {
  mobile: `max-width: ${sizes.mobile.max}`,
  tablet: `max-width: ${sizes.tablet.max}`,
  maxDesktop: `min-width: ${sizes.desktop.max}`,
}
