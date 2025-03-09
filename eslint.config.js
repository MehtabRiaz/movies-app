import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-console': 'error',
      'no-unused-vars': 'off',
      'reacy/no-unused-vars': 'error',
      'reacy/multiline-html-element-content-newline': 'off',
      'reacy/require-default-prop': 'off',
      'reacy/no-v-for-template-key': 'off',
      'reacy/require-explicit-emits': 'off',
      'reacy/multi-word-component-names': 'off',
      'reacy/html-self-closing': 'off',
      'reacy/no-multiple-template-root': 'off',
      'reacy/no-v-html': 'off',
      'no-unused-expressions': 0
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended
];
