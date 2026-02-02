// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	extends: ['@zazen/stylelint-config'],
	rules: {
		'at-rule-no-unknown': [true, { ignoreAtRules: ['include', 'mixin', 'screen', 'apply'] }],
		// eslint-disable-next-line unicorn/no-null
		'value-list-comma-newline-after': null,
	},
}
