export const getLocationHostName = () => {
  const hostname = window.location.hostname;
  return hostname;
};

export const getUrlParams = (param: string) => {
  const urlParamsString = window.location.search;
  const urlParams = new URLSearchParams(urlParamsString);
  return urlParams.get(param);
};

export const getUrlPort = () => {
  const urlPort = window.location.port;
  return urlPort;
};
