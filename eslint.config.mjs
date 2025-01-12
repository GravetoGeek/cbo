import pluginJs from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'


export default [
    {files: ['**/*.{js,mjs,cjs,ts}']},
    {files: ['**/*.{js}'], languageOptions: {sourceType: 'script'}},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'space-before-function-paren': 'off',
            'no-underscore-dangle': ['error', { allow: ['_s3'] }],
            'class-methods-use-this': 'off',
            'no-multi-assign': 'off',
            'max-len': ['error', { code: 200, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],
            indent: ['error', 4, { SwitchCase: 1 }],
            quotes: ['error', 'single'],
            semi: ['error', 'never'],
            'comma-dangle': ['error', 'only-multiline'],
            'no-return-assign': 1,
            'no-unreachable': 'warn',
            'prefer-const': 'off',
            'no-param-reassign': 'off',
            'arrow-body-style': ['error', 'always'],
            'implicit-arrow-linebreak': ['error', 'beside'],
            'function-paren-newline': ['error', 'consistent'],
            'no-throw-literal': 'off',
            eqeqeq: ['error', 'smart'],
            'no-restricted-syntax': ['error', /* 'FunctionExpression', */ 'WithStatement', 'BinaryExpression[operator="in"]'],
            'object-curly-newline': [
                'error',
                {
                    ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
                    ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
                    ImportDeclaration: { multiline: true, minProperties: 6, consistent: true },
                    ExportDeclaration: { multiline: true, minProperties: 6, consistent: true }
                }
            ]
        }
    }
]