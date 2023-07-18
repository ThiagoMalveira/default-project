export const getFirstWord = (words: string) => {
  if (!words) return null;

  const [firstWord] = words.trim().split(" ");

  return firstWord;
};

export const translateUrlParam = (url: string, obj: Record<string, string>) => {
  let translateUrlParam = url;

  Object.keys(obj).forEach((key) => {
    translateUrlParam = translateUrlParam.replace(`{{${key}}}`, obj[key]);
  });

  return translateUrlParam;
};

export const hidePart = (phoneNumber: string): string => {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  return `(xx) xxxxx-${phoneNumber.slice(7)}`;
};

export const breakTextWithHyphen = (text = "") => {
  const hasHyphen = text.includes("-");

  return hasHyphen ? text.split("-")[0] : text;
};
