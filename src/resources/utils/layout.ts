export const toPixels = (value: number): number | string => {
  if (isNaN(value)) {
    return value;
  }

  const numeric = Number(value);

  return numeric === 0 ? "0" : `${numeric}px`;
};
