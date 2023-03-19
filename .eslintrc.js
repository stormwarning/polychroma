/** @type {import('eslint').Linter.Config} */
const config = {
	extends: [
		'@zazen',
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'prettier',
	],
	rules: {
		'import/order': [
			'error',
			{
				alphabetize: {
					caseInsensitive: true,
					order: 'asc',
				},
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					['sibling', 'index'],
				],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '{@remix-run/**,react?(-dom)/**}',
						group: 'builtin',
						position: 'after',
					},
					{
						pattern: '~/**',
						group: 'internal',
						position: 'after',
					},
					{
						pattern: '*.+(css)',
						group: 'index',
						position: 'after',
						patternOptions: {
							matchBase: true,
						},
					},
				],
			},
		],
	},
}

module.exports = config
