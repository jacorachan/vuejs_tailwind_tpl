module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': './eslint-base.jsonc',
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4 ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
