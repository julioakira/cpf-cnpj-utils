const Strip = (document: string): string => document.replace(/\D/g, '')

const Format = (cpf: string): string =>
  [
    [cpf.slice(0, 3), cpf.slice(3, 6), cpf.slice(6, 9)]
      .filter(e => e)
      .join('.'),
    cpf.slice(9, 11)
  ]
    .filter(e => e)
    .join('-')

export default {
  Format,
  Strip,
}