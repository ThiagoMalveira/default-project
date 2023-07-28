import { formatToMoney } from '../../resources/utils/forNumber'
import { isString } from '../../resources/utils/is'

describe('utils - forNumber', () => {
  test('should format number in string money', () => {
    expect(formatToMoney(89965.8)).toBe('89.965,80')
    expect(isString(formatToMoney(89965.8))).toBeTruthy()
    expect(formatToMoney(500.1)).toBe('500,10')
    expect(formatToMoney(9.75)).toBe('9,75')
    expect(formatToMoney(9)).toBe('9,00')
    expect(formatToMoney(0)).toBe('0,00')
  })
})
