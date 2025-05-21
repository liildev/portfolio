import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import unusedImports from 'eslint-plugin-unused-imports';
import _import from 'eslint-plugin-import';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import pluginNext from '@next/eslint-plugin-next';
import typescriptParser from '@typescript-eslint/parser';
import tailwindPlugin from 'eslint-plugin-tailwindcss';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

export default [
	{
		ignores: [
			'**/node_modules/*',
			'**/out/*',
			'**/.next/*',
			'**/coverage',
			'lib/styles/globals.css',
			'next.config.ts',
			'tailwind.config.ts',
		],
	},
	{
			languageOptions: {
				parser: typescriptParser,
			}
	},
	...compat.extends(
		'next/core-web-vitals',
		'next/typescript',
		'eslint-config-next',
		'eslint:recommended',
		'plugin:@next/next/recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		// 'plugin:tailwindcss/recommended',
	),
	{
		plugins: {
			'@next/next': pluginNext,
			'unused-imports': unusedImports,
			'@typescript-eslint': typescriptEslint,
			tailwindcss: tailwindPlugin,
			import: _import,
			prettier,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/no-unescaped-entities': 'off',
			'@next/next/no-page-custom-font': 'off',
			'no-console': 'warn',
			'react/prop-types': 'off',
			'react/jsx-uses-react': 'off',
			'react-hooks/exhaustive-deps': 'off',
			'jsx-a11y/click-events-have-key-events': 'off',
			'jsx-a11y/interactive-supports-focus': 'off',
			'prettier/prettier': 'warn',
			'no-unused-vars': 'off',
			'unused-imports/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'warn',
			'jsx-a11y/heading-has-content': 'off',
			// 'tailwindcss/no-custom-classname': 'warn',

			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					args: 'after-used',
					ignoreRestSiblings: false,
					argsIgnorePattern: '^_.*?$',
				},
			],

			'import/order': [
				'warn',
				{
					groups: [
						'type',
						'builtin',
						'object',
						'external',
						'internal',
						'parent',
						'sibling',
						'index',
					],

					pathGroups: [
						{
							pattern: '~/**',
							group: 'external',
							position: 'after',
						},
					],

					'newlines-between': 'always',
				},
			],

			'react/self-closing-comp': 'warn',

			'react/jsx-sort-props': [
				'warn',
				{
					callbacksLast: true,
					shorthandFirst: true,
					noSortAlphabetically: false,
					reservedFirst: true,
				},
			],

			'padding-line-between-statements': [
				'warn',
				{
					blankLine: 'always',
					prev: '*',
					next: 'return',
				},
				{
					blankLine: 'always',
					prev: ['const', 'let', 'var'],
					next: '*',
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
			],
		},
	},
];
