import Cookies from 'js-cookie'

export const setCookie = (name: string, value: string, options = {}) => {
  Cookies.set(name, value, { ...options })
}

export const getCookie = (name: string): string | undefined => {
  return Cookies.get(name)
}

export const removeCookie = (name: string): void => {
  Cookies.remove(name)
}

export const removeAllCookie = (): void => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName)
  })
}
