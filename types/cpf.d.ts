declare const _types: {
  Strip: (cpf: string) => string,
  Format: (cpf: string) => string,
  ValidateDigit: (cpf: string, offset: number) => boolean,
  GenerateBase: () => string,
  GenerateVerifierDigit: (base: string, offset: number) => string,
  Generate: (format: boolean) => string,
  Validate: (cpf: string, zero_pad: boolean) => boolean
}

export default _types
