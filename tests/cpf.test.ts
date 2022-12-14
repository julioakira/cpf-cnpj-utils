import { CPF } from '../src'

describe('CPF', () => {
  test('Strips the supplied CPF', () => {
    expect(CPF.Strip('001.071.008-60')).toMatch('00107100860')
  })
  test('Formats the Supplied CPF', () => {
    expect(CPF.Format('00107100860')).toMatch('001.071.008-60')
  })
})