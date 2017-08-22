module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'standard',
    plugins: [
        'prettier',
        'html'
    ],
    rules: {
        "prettier/prettier": "error",

        'arrow-parens': 0,  // allow paren-less arrow functions
        'generator-star-spacing': 0,  // allow async-await
        'no-console': 2,  // do not allow console.logs etc.

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

        'comma-dangle': ['error', 'only-multiline'],
        'indent': ['error', 4],
        'no-multiple-empty-lines': ['warn', { 'max': 2 }],
        'import/no-unresolved': 0,
        'import/no-unassigned-import': 0
    },
    globals: {}
}
