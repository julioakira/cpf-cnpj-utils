const INVALID: Array<string> = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909',
]

const Strip = (document: string): string => document
  ? document.trim().replace(/\D/g, '')
  : ''

const Format = (cpf: string): string =>
  [
    [cpf.slice(0, 3), cpf.slice(3, 6), cpf.slice(6, 9)]
      .filter(e => e)
      .join('.'),
    cpf.slice(9, 11)
  ]
    .filter(e => e)
    .join('-')

const ValidateDigit = (cpf: string, offset: number = 0): boolean => {
  const firstDigits: Array<number> = cpf
    .slice(0, 9 + offset)
    .split('')
    .map(e => Number(e))
  const lastDigits: Array<number> = cpf
    .slice(9, 11)
    .split('')
    .map(e => Number(e))

  const sequence: number = firstDigits.length + 1
  const multiplied: number = firstDigits
    .reduce((acc, curr, idx) => acc + curr * (sequence - idx), 0)
  const modulus: number = (multiplied * 10) % 11

  return modulus === 10
    ? lastDigits[0 + offset] === 0
    : lastDigits[0 + offset] === modulus
}

const Validate = (cpf: string): boolean => {
  const clean: string = Strip(cpf)
  if (!clean ||
    clean.length !== 11 ||
    INVALID.includes(clean) ||
    !ValidateDigit(clean) ||
    !ValidateDigit(clean, 1)
  )
    return false
  return true
}

export default {
  Format,
  Strip,
  Validate,
}