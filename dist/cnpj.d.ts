declare const _default: {
    Format: (cnpj: string) => string;
    Strip: (cnpj: string) => string;
    Validate: (cnpj: string, zero_pad?: boolean) => boolean;
    Generate: (format?: boolean) => string;
};
export default _default;
