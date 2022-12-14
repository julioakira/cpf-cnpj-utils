const Strip = (document: string): string => document.replace(/\D/g, '')

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

export default {
  Format,
  Strip,
}