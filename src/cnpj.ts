const INVALID: Array<string> = [
	'00000000000000',
	'11111111111111',
	'22222222222222',
	'33333333333333',
	'44444444444444',
	'55555555555555',
	'66666666666666',
	'77777777777777',
	'88888888888888',
	'99999999999999'
]

const Strip = (cnpj: string): string => cnpj
	? cnpj.trim().replace(/\D/g, '')
	: ''

const Format = (cnpj: string): string =>
	[
		[
			[
				[cnpj.slice(0, 2), cnpj.slice(2, 5), cnpj.slice(5, 8)]
					.filter(e => e)
					.join('.'),
				cnpj.slice(8, 12)
			]
				.filter(e => e)
				.join('/')
		],
		cnpj.slice(12, 14)
	]
		.filter(e => e)
		.join('-')

const ValidateDigit = (cnpj: string, offset: number = 0): boolean => {
	const factors: Array<number> = offset === 0
		? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
		: [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]

	const firstDigits: Array<number> = cnpj
		.slice(0, 12 + offset)
		.split('')
		.map(e => Number(e))
	const lastDigits: Array<number> = cnpj
		.slice(12, 14)
		.split('')
		.map(e => Number(e))

	const multiplied: number = firstDigits
		.reduce((acc, curr, idx) => acc + curr * (factors[idx]), 0)
	const modulus: number = multiplied % 11

	return modulus < 2
		? lastDigits[0 + offset] === 0
		: lastDigits[0 + offset] === 11 - modulus
}

const GenerateBase = (): string => {
	let cnpj: string = ''
	for (let i = 0; i < 12; i++) {
		cnpj += Math.floor(Math.random() * 9)
	}
	return cnpj
}

const GenerateVerifierDigit = (base: string, offset: number = 0): string => {
	let digit: number = 0
	let partial: string = base + digit.toString()
	while (!ValidateDigit(partial, offset)) {
		partial.slice(0, 12 + offset)
		digit++
		partial = base + digit.toString()
	}
	return digit.toString()
}

const Generate = (format: boolean = false): string => {
	let cnpj: string = GenerateBase()
	cnpj += GenerateVerifierDigit(cnpj)
	cnpj += GenerateVerifierDigit(cnpj, 1)

	return format
		? Format(cnpj)
		: cnpj
}

const Validate = (cnpj: string, zero_pad = true): boolean => {
	const clean: string = zero_pad ? Strip(cnpj).padStart(14, '0') : Strip(cnpj) 
	if (!clean ||
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
	Generate,
}