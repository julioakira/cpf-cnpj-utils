import { CNPJ } from '../src'

describe('CNPJ', () => {
  test('Strips the supplied CNPJ', () => {
    expect(CNPJ.Strip('30.306.294/0001-45')).toMatch('30306294000145')
  })
  test('Strips CNPJ with spaces and other characters', () => {
    expect(CNPJ.Strip(' 30 306 294 0001 45 ')).toMatch('30306294000145')
    expect(CNPJ.Strip('30_306_294_0001_45')).toMatch('30306294000145')
  })
  test('Returns an empty string for falsy strip values', () => {
    expect(CNPJ.Strip('')).toMatch('')
  })
  test('Formats the Supplied Unformatted CNPJ', () => {
    expect(CNPJ.Format('30306294000145')).toMatch('30.306.294/0001-45')
  })
  test('Generates Valid CNPJs', () => {
    expect(CNPJ.Validate(CNPJ.Generate())).toBeTruthy()
    expect(CNPJ.Validate(CNPJ.Generate())).toBeTruthy()
    expect(CNPJ.Validate(CNPJ.Generate())).toBeTruthy()
    expect(CNPJ.Validate(CNPJ.Generate())).toBeTruthy()
  })
  test('Returns false for Invalid CNPJs', () => {
    expect(CNPJ.Validate('00000000000000')).toBeFalsy()
    expect(CNPJ.Validate('11111111111111')).toBeFalsy()
    expect(CNPJ.Validate('22222222222222')).toBeFalsy()
    expect(CNPJ.Validate('33333333333333')).toBeFalsy()
    expect(CNPJ.Validate('44444444444444')).toBeFalsy()
    expect(CNPJ.Validate('55555555555555')).toBeFalsy()
    expect(CNPJ.Validate('66666666666666')).toBeFalsy()
    expect(CNPJ.Validate('77777777777777')).toBeFalsy()
    expect(CNPJ.Validate('88888888888888')).toBeFalsy()
    expect(CNPJ.Validate('99999999999999')).toBeFalsy()
  })
  test('Invalidates Weird CNPJ Inputs', () => {
    expect(CNPJ.Validate('30_062940!0145')).toBeFalsy()
    expect(CNPJ.Validate('60@01190*00104')).toBeFalsy()
    expect(CNPJ.Validate('27.860.094/0001-%5')).toBeFalsy()
  })
  test('Invalidates Invalid But Formatted CNPJs', () => {
    expect(CNPJ.Validate('30.306.294/0001-55')).toBeFalsy()
    expect(CNPJ.Validate('60.705.190/0001-04')).toBeFalsy()
    expect(CNPJ.Validate('27.810.094/0001-25')).toBeFalsy()
    expect(CNPJ.Validate('42.274.696/0025-60')).toBeFalsy()    
  })
  test('Validates Formatted CNPJs', () => {
    expect(CNPJ.Validate('30.306.294/0001-45')).toBeTruthy()
    expect(CNPJ.Validate('60.701.190/0001-04')).toBeTruthy()
    expect(CNPJ.Validate('27.860.094/0001-25')).toBeTruthy()
    expect(CNPJ.Validate('42.274.696/0025-61')).toBeTruthy()
  })
  test('Invalidates Invalid But Unformatted CNPJs', () => {
    expect(CNPJ.Validate('30306294000155')).toBeFalsy()
    expect(CNPJ.Validate('60705190000104')).toBeFalsy()
    expect(CNPJ.Validate('27810094000125')).toBeFalsy()
    expect(CNPJ.Validate('42274696002560')).toBeFalsy()
  })
  test('Invalidates Unformatted CNPJs unless zero_pad is true', () => {
    expect(CNPJ.Validate('30306294000145')).toBeTruthy()
    expect(CNPJ.Validate('60701190000104')).toBeTruthy()
    expect(CNPJ.Validate('27860094000125')).toBeTruthy()
    expect(CNPJ.Validate('42274696002561')).toBeTruthy()
    expect(CNPJ.Validate('55140818000100')).toBeTruthy()
    // 13 length CNPJ
    expect(CNPJ.Validate('4307650002502', true)).toBeTruthy()

  })
  test('Validates valid Alphanumeric CNPJs', () => {
    expect(CNPJ.Validate('HS.462.BGP/0001-21')).toBeTruthy()
    expect(CNPJ.Validate('ZZ.0ZB.13X/0001-73')).toBeTruthy()
    expect(CNPJ.Validate('HR.D2T.WTT/0001-41')).toBeTruthy()
    expect(CNPJ.Validate('RN.Y1L.Z93/0001-30')).toBeTruthy()
  })
  test('Invalidates invalid Alphanumeric CNPJs', () => {
    expect(CNPJ.Validate('HS.4E2.BGP/0001-21')).toBeFalsy()
    expect(CNPJ.Validate('ZZ.0AB.13X/0001-73')).toBeFalsy()
    expect(CNPJ.Validate('HR.DNT.WTT/0001-41')).toBeFalsy()
    expect(CNPJ.Validate('RN.B1L.Z93/0001-30')).toBeFalsy()
  })
  test('Invalidates 13 digits CNPJs without zero padding argument', () => {
    // 13 length CNPJ
    expect(CNPJ.Validate('4307650002502', false)).toBeFalsy()
    expect(CNPJ.Validate('1125282002160', false)).toBeFalsy()

  })
})
