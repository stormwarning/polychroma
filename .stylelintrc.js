module.exports = {
    extends: ['@zazen/stylelint-config'],
    rules: {
        'at-rule-no-unknown': [
            true,
            { ignoreAtRules: ['include', 'mixin', 'screen', 'apply'] },
        ],
        'value-list-comma-newline-after': null,
    },
}
