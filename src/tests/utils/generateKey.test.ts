import { generateKey } from '../../resources/utils/generateKey'

describe('utils - generateKey', () => {
  test('should generate key ', () => {
    const key = generateKey()

    expect(key).not.toBeNull()
    expect(typeof key).toBe('string')
  })
})
