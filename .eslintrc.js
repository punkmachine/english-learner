module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'plugin:@intlify/vue-i18n/recommended'
	],
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	"rules": {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // нет консоль логам в проде!
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // нет дебаггеру!

		// i18n
		'@intlify/vue-i18n/no-dynamic-keys': 'off', // выключает запрет на использование динамических ключей
		'@intlify/vue-i18n/no-unused-keys': 'warn', // предупреждение о неиспользуемом ключе локализации
		'@intlify/vue-i18n/no-raw-text': ['warn', {
			"attributes": {},
			"ignoreNodes": [],
			"ignoreText": []
		}], // предупреждает о том, что используется обычный текст, а не переведённый ключ в коде
		'@intlify/vue-i18n/no-html-messages': 'error', // запрет на использование html в сообщениях перевода
		'@intlify/vue-i18n/no-missing-keys': 'error', // запрет на использование не существующего ключа локализации
		'@intlify/vue-i18n/no-v-html': 'error', // запрет на попытку локализации в v-html
		'@intlify/vue-i18n/valid-message-syntax': 'error', // запрещает не валидные сообщения в ключах локализации

		'@intlify/vue-i18n/key-format-style': ['error',
			'camelCase',
			{
				"allowArray": false,
				"splitByDots": false,
			}
		], // запрещает любой вид ключей кроме camelCase
		'@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error', // запрет на дубликаты ключей в локализации
		'@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error', // запрещает использовать ключ, имеющийся не во всех файлах локализации
		'@intlify/vue-i18n/no-unknown-locale': 'error', // запрещает неизвестные ключи локализации
	}
}
