module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true,
    },
    extends: 'standard',
    plugins: ['html'],
    rules: {
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                exports: 'always-multiline',
            },
        ],
        indent: ['error', 4],
        'no-multiple-empty-lines': ['error', { max: 2 }],
        // 'space-before-function-paren': ['error', 'never'],

        'arrow-parens': 0, // allow paren-less arrow functions
        'generator-star-spacing': 0, // allow async-await
        'no-console': 2, // do not allow console.logs etc.

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'import/no-unresolved': 0,
        'import/no-unassigned-import': 0,
    },
    globals: {},
}
