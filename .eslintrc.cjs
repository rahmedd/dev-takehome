/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
	root: true,
	'extends': [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	overrides: [
		{
			files: [
				'e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'
			],
			'extends': [
				// 'plugin:playwright/recommended'
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
		indent: ['warn', 'tab'],
		quotes: ['warn', 'single', { 'allowTemplateLiterals': true }],
		'vue/html-indent': 'off',
	},
}
