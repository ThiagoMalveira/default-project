type T = string | number | boolean | [] | undefined | null | object

const typeOf = (obj: T): any => {
  const type = {}.toString.call(obj).match(/\s([a-zA-Z]+)/)

  return ((type?.length && type[1]) || '').toLowerCase()
}

type P = ReturnType<typeof typeOf>

export const isArray = (obj: T): P => typeOf(obj) === 'array'
export const isRegexp = (obj: T): P => typeOf(obj) === 'regexp'
export const isObject = (obj: T): P => typeOf(obj) === 'object'
export const isError = (obj: T): P => typeOf(obj) === 'error'
export const isDate = (obj: T): P => typeOf(obj) === 'date'
export const isNumber = (obj: T): P => typeOf(obj) === 'number'
export const isString = (obj: T): P => typeOf(obj) === 'string'
export const isBoolean = (obj: T): P => typeOf(obj) === 'boolean'
export const isFunction = (obj: T): P => typeOf(obj) === 'function'
