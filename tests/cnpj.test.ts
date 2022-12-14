import { CNPJ } from '../src'

describe('CPF', () => {
  test('Strips the supplied CNPJ', () => {
    expect(CNPJ.Strip('30.306.294/0001-45')).toMatch('30306294000145')
  })
  test('Formats the Supplied CNPJ', () => {
    expect(CNPJ.Format('30306294000145')).toMatch('30.306.294/0001-45')
  })
})