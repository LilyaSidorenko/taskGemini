module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true,
    },
    'extends': 'eslint:recommended',
    'rules': {
        'indent': [0, 4],
        'linebreak-style': [0, 'unix'],
        'quotes': [1, 'single'],
        'semi': [1, 'always'],
        'brace-style': [2, '1tbs'],
        'array-bracket-spacing': [2, 'never'],
        'camelcase': [2, {'properties': 'always'}],
        'keyword-spacing': [2],
        'no-trailing-spaces': [2],
        'no-unused-vars': [0],
        'no-undef': [0]

    },
    "parserOptions": {
        "sourceType": "module"
    }
};
