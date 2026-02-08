/** @type {import('stylelint').Config} */
const config = {
	extends: ['@zazen/stylelint-config'],
	ignoreFiles: ['.nuxt/**/*.css', 'dist/**/*.css'],
	rules: {
		'at-rule-no-unknown': [true, { ignoreAtRules: ['include', 'mixin', 'screen', 'apply'] }],
		'order/order': [
			'dollar-variables',
			'custom-properties',
			{
				type: 'at-rule',
				name: 'extend',
			},
			{
				type: 'at-rule',
				name: 'include',
				hasBlock: false,
			},
			'declarations',
			'rules',
			{
				type: 'rule',
				selector: /^&::[\w-]+$/,
			},
			{
				type: 'rule',
				selector: /^&:[\w-.()]+$/,
			},
			{
				type: 'at-rule',
				hasBlock: true,
			},
		],
	},
	overrides: [
		{
			files: ['**/*.vue'],
			/** @todo [@zazen/stylelint-config@>5.1.0] Remove once included upstream. */
			customSyntax: 'postcss-html',
		},
	],
}

export default config
