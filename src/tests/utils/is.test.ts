/* eslint-disable @typescript-eslint/no-empty-function */
import {
  isArray,
  isBoolean,
  isDate,
  isError,
  isFunction,
  isNumber,
  isObject,
  isRegexp,
  isString,
} from '../../resources/utils/is'

describe('utils - is', () => {
  test('should be pass all isArray variations', () => {
    expect(isArray([])).toBeTruthy()
    expect(isArray(['a'])).toBeTruthy()
    expect(isArray([1, 2])).toBeTruthy()
    expect(isArray([{}])).toBeTruthy()
    expect(isArray([{}])).toBeTruthy()

    expect(isArray(null)).toBeFalsy()
    expect(isArray(undefined)).toBeFalsy()
    expect(isArray(null)).toBeFalsy()
    expect(isArray('')).toBeFalsy()
    expect(isArray(1)).toBeFalsy()
    expect(isArray({})).toBeFalsy()
    expect(isArray(/teste/)).toBeFalsy()
    expect(isArray(NaN)).toBeFalsy()
  })

  test('should be pass all isRegexp variations', () => {
    expect(isRegexp(/a/)).toBeTruthy()
    expect(isRegexp(/a|b/)).toBeTruthy()
    expect(isRegexp(/["']/)).toBeTruthy()
    expect(isRegexp(/(\d{1})(\d{2})(\d{2})/)).toBeTruthy()

    expect(isRegexp(undefined)).toBeFalsy()
    expect(isRegexp(null)).toBeFalsy()
    expect(isRegexp('')).toBeFalsy()
    expect(isRegexp('1, 2, 3')).toBeFalsy()
    expect(isRegexp({})).toBeFalsy()
    expect(isRegexp(NaN)).toBeFalsy()
  })

  test('should be pass all isObject variations', () => {
    expect(isObject({})).toBeTruthy()
    expect(isObject({ a: 'a' })).toBeTruthy()
    expect(isObject(JSON.parse('{"a": "a"}'))).toBeTruthy()

    expect(isObject(1)).toBeFalsy()
    expect(isObject(undefined)).toBeFalsy()
    expect(isObject(null)).toBeFalsy()
    expect(isObject('{}')).toBeFalsy()
    expect(isObject('1, 2, 3')).toBeFalsy()
    expect(isObject(/a/)).toBeFalsy()
    expect(isObject(NaN)).toBeFalsy()
  })

  test('should be pass all isError variations', () => {
    expect(isError(undefined)).toBeFalsy()
    expect(isError(null)).toBeFalsy()
    expect(isError('')).toBeFalsy()
    expect(isError(1)).toBeFalsy()
    expect(isError({})).toBeFalsy()
    expect(isError(/teste/)).toBeFalsy()
    expect(isError(NaN)).toBeFalsy()
  })

  test('should be pass all isDate variations', () => {
    expect(isDate(new Date())).toBeTruthy()
    expect(isDate(new Date(12121212121))).toBeTruthy()
    expect(isDate(new Date('2017-05-01'))).toBeTruthy()

    expect(isDate(undefined)).toBeFalsy()
    expect(isDate(null)).toBeFalsy()
    expect(isDate('')).toBeFalsy()
    expect(isDate(1)).toBeFalsy()
    expect(isDate({})).toBeFalsy()
    expect(isDate(/teste/)).toBeFalsy()
    expect(isDate(NaN)).toBeFalsy()
  })

  test('should be pass all isNumber variations', () => {
    expect(isNumber(1)).toBeTruthy()
    expect(isNumber(0)).toBeTruthy()
    expect(isNumber(2323232333)).toBeTruthy()
    expect(isNumber(NaN)).toBeTruthy()

    expect(isNumber(undefined)).toBeFalsy()
    expect(isNumber(null)).toBeFalsy()
    expect(isNumber('')).toBeFalsy()
    expect(isNumber({})).toBeFalsy()
    expect(isNumber(/teste/)).toBeFalsy()
  })

  test('should be pass all isString variations', () => {
    expect(isString('a')).toBeTruthy()
    expect(isString('')).toBeTruthy()
    expect(isString('{}')).toBeTruthy()
    expect(isString('[]')).toBeTruthy()

    expect(isString(undefined)).toBeFalsy()
    expect(isString(null)).toBeFalsy()
    expect(isString(NaN)).toBeFalsy()
    expect(isString({})).toBeFalsy()
    expect(isString(/teste/)).toBeFalsy()
  })

  test('should be pass all isBoolean variations', () => {
    expect(isBoolean(true)).toBeTruthy()
    expect(isBoolean(false)).toBeTruthy()

    expect(isBoolean(undefined)).toBeFalsy()
    expect(isBoolean(null)).toBeFalsy()
    expect(isBoolean('')).toBeFalsy()
    expect(isBoolean(1)).toBeFalsy()
    expect(isBoolean({})).toBeFalsy()
    expect(isBoolean(/teste/)).toBeFalsy()
    expect(isBoolean(NaN)).toBeFalsy()
  })

  test('should be pass all isFunction variations', () => {
    const arrow = () => {}
    const anonymous = function () {}
    function namedFunc() {}

    expect(isFunction(() => {})).toBeTruthy()
    expect(isFunction(function () {})).toBeTruthy()
    expect(isFunction(arrow)).toBeTruthy()
    expect(isFunction(anonymous)).toBeTruthy()
    expect(isFunction(namedFunc)).toBeTruthy()

    expect(isFunction(true)).toBeFalsy()
    expect(isFunction(false)).toBeFalsy()
    expect(isFunction(undefined)).toBeFalsy()
    expect(isFunction(null)).toBeFalsy()
    expect(isFunction('')).toBeFalsy()
    expect(isFunction(1)).toBeFalsy()
    expect(isFunction({})).toBeFalsy()
    expect(isFunction(/teste/)).toBeFalsy()
    expect(isFunction(NaN)).toBeFalsy()
  })
})
