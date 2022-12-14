import jest from 'jest'

import { cpf } from '../src'

describe('CPF', () => {
  test('Strips the supplied CPF', () => {
    expect(cpf.Strip('001.071.008-60')).toMatch('00107100860')
  })
  test('Formats the Supplied CPF', () => {
    expect(cpf.Format('00107100860')).toMatch('001.071.008-60')
  })
})