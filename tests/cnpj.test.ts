import jest from 'jest'

import { cnpj } from '../src'

describe('CPF', () => {
  test('Strips the supplied CNPJ', () => {
    expect(cnpj.Strip('30.306.294/0001-45')).toMatch('30306294000145')
  })
  test('Formats the Supplied CNPJ', () => {
    expect(cnpj.Format('30306294000145')).toMatch('30.306.294/0001-45')
  })
})