"use strict";

export const formatCpf = (cpf: string): string =>
	[
		[cpf.slice(0, 3), cpf.slice(3, 6), cpf.slice(6, 9)]
			.filter(e => e)
			.join('.'),
		cpf.slice(9, 11)
	]
		.filter(e => e)
		.join('-')

export const formatCnpj = (cnpj: string): string =>
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

export const strip = (document: string): string => document.replace(/\D/g, '')
