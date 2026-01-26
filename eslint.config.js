import zazen from '@zazen/eslint-config'
import zazenNode from '@zazen/eslint-config/node'
import zazenStylistic from '@zazen/eslint-config/stylistic'
import pluginVue from 'eslint-plugin-vue'
import { defineConfig } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

/** @type {import('eslint').Linter.Config} */
const config = defineConfig([
  {
    name: 'project/ignores',
    ignores: ['**/dist', '**/.nuxt'],
  },

  ...pluginVue.configs['flat/recommended'],
  ...zazen,
  ...zazenNode,

  {
    name: 'project/rules',
    files: ['**/*.?(j|t)s', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    settings: {
      'import-x/ignore': ['node_modules'],
      node: {
        version: '20',
      },
    },
    rules: {
      camelcase: 'off',
      'import-x/no-anonymous-default-export': ['error', { allowObject: true }],

      /**
       * @todo [@zazen/eslint-config@>7.4.1]:  Remove once `Props` is added to the allowed list.
       */
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    name: 'project/rules/vue',
    files: ['**/*.vue', '**/utils/*.js'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      'import-x/no-extraneous-dependencies': [
        'error',
        { whitelist: ['nuxt', 'vue'] },
      ],
    },
  },
  {
    name: 'project/rules/nuxt/routes',
    files: [
      'app/layouts/*.vue',
      'app/pages/*.vue',
      'app/app.vue',
      'app/error.vue',
    ],
    rules: {
      /**
       * These files have a special meaning in Nuxt, and are not used
       * directly by users.
       */
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    name: 'project/rules/configs',
    files: ['**/*.config.?(j|t)s'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
    },
  },

  zazenStylistic,
])

export default config
