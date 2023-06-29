import { CPF } from '../src'

describe('CPF', () => {
  test('Strips the supplied CPF', () => {
    expect(CPF.Strip('001.071.008-60')).toMatch('00107100860')
  })
  test('Returns an empty string for falsy strip values', () => {
    expect(CPF.Strip('')).toMatch('')
  })
  test('Formats the Supplied Unformatted CPF', () => {
    expect(CPF.Format('00107100860')).toMatch('001.071.008-60')
  })
  test('Returns false for Invalid CPFs', () => {
    expect(CPF.Validate('00000000000')).toBeFalsy()
    expect(CPF.Validate('11111111111')).toBeFalsy()
    expect(CPF.Validate('22222222222')).toBeFalsy()
    expect(CPF.Validate('33333333333')).toBeFalsy()
    expect(CPF.Validate('44444444444')).toBeFalsy()
    expect(CPF.Validate('55555555555')).toBeFalsy()
    expect(CPF.Validate('66666666666')).toBeFalsy()
    expect(CPF.Validate('77777777777')).toBeFalsy()
    expect(CPF.Validate('88888888888')).toBeFalsy()
    expect(CPF.Validate('99999999999')).toBeFalsy()
    expect(CPF.Validate('12345678909')).toBeFalsy()
  })
  test('Invalidates Weird CPF Inputs', () => {
    expect(CPF.Validate('001#7%00860')).toBeFalsy()
    expect(CPF.Validate('(067727200*')).toBeFalsy()
    expect(CPF.Validate('40308&85[52')).toBeFalsy()
  })
  test('Invalidates Invalid But Formatted CPFs', () => {
    expect(CPF.Validate('001.021.008.60')).toBeFalsy()
    expect(CPF.Validate('606.772.720-26')).toBeFalsy()
    expect(CPF.Validate('403.089.850-62')).toBeFalsy()
    expect(CPF.Validate('085.948.090-63')).toBeFalsy()    
  })
  test('Validates Formatted CPFs', () => {
    expect(CPF.Validate('001.071.008.60')).toBeTruthy()
    expect(CPF.Validate('606.772.720-06')).toBeTruthy()
    expect(CPF.Validate('403.089.850-52')).toBeTruthy()
    expect(CPF.Validate('085.948.090-93')).toBeTruthy()
  })
  test('Invalidates Invalid But Unformatted CPFs', () => {
    expect(CPF.Validate('00102100860')).toBeFalsy()
    expect(CPF.Validate('60677272026')).toBeFalsy()
    expect(CPF.Validate('40308985062')).toBeFalsy()
    expect(CPF.Validate('08594809063')).toBeFalsy()
  })
  test('Validates Unformatted CPFs', () => {
    expect(CPF.Validate('00107100860')).toBeTruthy()
    expect(CPF.Validate('60677272006')).toBeTruthy()
    expect(CPF.Validate('40308985052')).toBeTruthy()
    expect(CPF.Validate('08594809093')).toBeTruthy()
    // 10 digits cpf test
    expect(CPF.Validate('2204306240')).toBeTruthy()
    // 9 digits cpf test
    expect(CPF.Validate('426781708')).toBeTruthy()
  })
  test('Invalidates variable length CPFs without zero padding', () => {
    // 10 digits cpf test
    expect(CPF.Validate('2204306240', false)).toBeFalsy()
    // 9 digits cpf test
    expect(CPF.Validate('426781708', false)).toBeFalsy()
  })
})

