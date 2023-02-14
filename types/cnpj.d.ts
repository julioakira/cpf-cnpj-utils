declare const _types: {
  Strip: (cnpj: string) => string,
  Format: (cnpj: string) => string,
  ValidateDigit: (cnpj: string, offset: number) => boolean,
  GenerateBase: () => string,
  GenerateVerifierDigit: (base: string, offset: number) => string,
  Generate: (format: boolean) => string,
  Validate: (cnpj: string, zero_pad: boolean) => boolean
}

export default _types
