/** @type {import('eslint').Linter.Config} */
const config = {
	extends: [
		'@zazen',
		'@remix-run/eslint-config',
		'@remix-run/eslint-config/node',
		'prettier',
	],
	rules: {
		'capitalized-comments': 'off',

		'@typescript-eslint/no-unused-vars': 'off',

		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
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
						pattern: '{@remix-run/**,react?(-dom|-router-dom)}',
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
				pathGroupsExcludedImportTypes: ['builtin'],
			},
		],

		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					env: false,
					props: false,
					ref: false,
					vars: false,
				},
			},
		],
		'unicorn/switch-case-braces': ['error', 'avoid'],
	},
}

module.exports = config
