import { getFirstWord } from '../../resources/utils/forString'

describe('utils - forText', () => {
  test('should get first word of the text', () => {
    const fullName = 'Moacir Ribeiro Santos'

    expect(getFirstWord('')).toBeNull()
    expect(getFirstWord(fullName)).toBe('Moacir')
  })
})
