module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:@intlify/vue-i18n/recommended'],
	globals: {
		localStorage: true,
		console: true,
		process: true,
		Intl: true,
		sessionStorage: true,
	},
	parserOptions: {
		parser: '@babel/eslint-parser',
	},
	settings: {
		'vue-i18n': {
			localeDir: './path/to/locales/*.{json,json5,yaml,yml,js}',
		},
	},
	rules: {
		// eslint
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 'off', // выключает требование не использовать табы
		'quotes': 'off', // выключает требования к форматированию кавычек
		'semi': 'off', // выключает требование к точкам с запятой
		'indent': 'off', // выключает требование к форматированию табов и пробелов
		'space-before-function-paren': 'off', // выключает требование к пробелу между function и ()
		'comma-dangle': 'off', // выключает требование к отсутствию запятой в конце перечисления ключей объектов
		'eol-last': 'off', // выключает требование к пустой последней строке
		'padded-blocks': 'off',
		'spaced-comment': 'off', // выключает требование к пробелу после комментария
		'arrow-parens': 'off', // выключает требование к скобкам в стрелочных функциях
		'no-extra-boolean-cast': 'off', // выключает запрет двойного отрицания
		'no-mixed-spaces-and-tabs': 'off', // выключает требование не смешивать табы и пробелы
		'space-before-blocks': 'off', // отключает требование к пробелу перед { в функции
		'space-infix-ops': 'off', // отключает требование пробелов между математическими операциями и операндами
		'no-multiple-empty-lines': 'off', // выключает ошибку при множественном отступе через enter между блоками
		'no-inner-declarations': 'off', // выключает запрет на объявления функций в вложенных блоках.
		'no-lonely-if': 'off', // отключает запрет на единственный if внутри блока else
		'no-prototype-builtins': 'off', // отключает правило связанное с блокировкой доступа к prototype методам объектов.
		'no-constant-condition': 'error', // запрещает постоянное значение в условных конструкциях (if (true) {})
		'array-callback-return': 'error', // выдает ошибку, если в методах массива, предусматривающих return, он не обнаружен
		'for-direction': 'error', // выдает ошибку, если была попытка пустить for от 1 до 10, но в i--.
		'no-cond-assign': 'error', // запрещает оператор присванивания в условных конструкциях
		'no-const-assign': 'error', // сразу выдает ошибку о попытке изменить константу в коде
		'no-dupe-args': 'error', // запрещает дублирование имен аргументов в функции
		'no-dupe-else-if': 'error', // запрещает дубликаты else-if
		'no-dupe-keys': 'error', // запрещает дублирование ключей в объектах-литералах.
		'no-duplicate-imports': 'error', // запрещает дублирующиеся импорты
		'no-duplicate-case': 'error', // запрещает дублирующиеся условия в switch case.
		'no-fallthrough': 'error', // выдает ошибку, если в case не встретилось break/return/throw
		'no-ex-assign': 'error', // запрещает переопределение error в catch-блоке
		'no-empty-pattern': 'error', // запрещает пустые шаблоны деструктурирования.
		'no-import-assign': 'error', // выдает ошибку при попытке изменить то, что было импортировано.
		'no-func-assign': 'error', // выдает ошибку, если попытаться переназначить функцию.
		'no-self-compare': 'error', // запретить сравнение двух заведомо одинаковых значений.
		'use-isnan': 'error', // требует использовать isNaN() при проверке на == NaN.
		'no-use-before-define': 'error', // запрещает использовать переменную до её инициализации.
		'no-unused-vars': 'error', // запретить неиспользуемые переменные.
		'no-unsafe-optional-chaining': 'error', // запрещает опциональную цепочку (.?) вызова там, где она не нужна. актуально для структур данных
		'no-unsafe-negation': 'error', // https://eslint.org/docs/latest/rules/no-unsafe-negation
		'no-unreachable-loop': 'error', // запретить циклы на одну итерацию.
		'no-unreachable': 'error', // запретить код, который располагается после return, break, throw в блоке видимости и никогда не будет выполнен.
		'no-unmodified-loop-condition': 'error', // запретить циклы while и do while, если в теле цикла не меняется условие его продолжение.
		'no-undef': 'error', // запрет на использование не объявленных переменных, за исключением тех, что объявлены в global-настройках eslint.
		'yoda': 'error', // https://eslint.org/docs/latest/rules/yoda
		'require-await': 'error', // запретить async функции, если в них нет await
		'prefer-template': 'error', // требует использовать вычисляемых строк, вместо конкатенации строк.
		'prefer-const': 'error', // требует объявлять не изменяемые переменные через const.
		'prefer-arrow-callback': 'error', // требует коллбэки как стрелочные функции.
		'no-var': 'error', // запрещает var в проекте
		'no-useless-concat': 'error', // запрет на не нужные конкатенации строк
		'no-useless-computed-key': 'error', // запрещает использование вычисляемых ключей, когда это не нужно
		'no-unneeded-ternary': 'error', // запрещает использовать тернарник там, где он не нужен
		'no-undef-init': 'error', // запрещает инициализацию переменных в undefined
		'no-shadow': 'error', // запрет на создание переменной в локальной области видимости, с таким же названием, как в области видимости выше
		'no-redeclare': 'error', // запрет на повторное объявление переменной
		'no-param-reassign': 'error', // запрет на изменение входных параметров в функции
		'no-nested-ternary': 'error', // Запрет на вложенные тернарные операторы
		'no-negated-condition': 'error', // запрет на отрицательные условия там, где есть if/else полный синтаксис
		'no-global-assign': 'error', // запретить присваивание к зарезервированным именам переменных (window типа)
		'no-extra-boolean-cast': 'error', // запрет на не нужные логические выражения
		'no-eq-null': 'error', // запрещает сравнивать по не строгому равенству на null,
		'no-empty': 'error', // запрет на пустые циклы, условия, try/catch блоки
		'no-alert': 'error', // запретить alert, comfirm, prompt
		'no-bitwise': 'error', // запрет на битовые операции в js
		'eqeqeq': 'error', // требует обязательное использование строгого сравнения, вместо не строгого

		// vue
		'vue/no-multi-spaces': 'off', // отключает требование к отсутствию нескольких пробелов подряд
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'always',
					component: 'always',
				},
				svg: 'always',
				math: 'always',
			},
		], // требовать закрытие одиночных тегов html обязательно
		'vue/comment-directive': [
			'error',
			{
				reportUnusedDisableDirectives: false,
			},
		], // включает поддержку выключения eslint в template, но показывает, что какое-то правило выключено не верно
		'vue/multi-word-component-names': 'off', // выключает обязательное именование компонентов из двух и более слов.
		'vue/no-arrow-functions-in-watch': 'error', // запрещает стрелочные функции в watch.
		'vue/no-async-in-computed-properties': 'error', // запрещает делать computed асинхронным
		'vue/no-child-content': 'warn', // сообщения о том, что возможно с помощью v-html или v-text перезаписывается содержимое компонента.
		'vue/no-computed-properties-in-data': 'error', // запрещает использовать computed-переменные в data()
		'vue/no-dupe-keys': 'error', // запрещает дубликаты имён свойств между разными ключами optionsAPI
		'vue/no-dupe-v-else-if': 'error', // запрещает дубликаты v-else-if
		'vue/no-duplicate-attributes': 'error', // запрещает дубликаты атрибутов
		'vue/no-mutating-props': 'error', // запрет на мутацию пропсов
		'vue/no-parsing-error': [
			'error',
			{
				'abrupt-closing-of-empty-comment': true, // требование к закрытию комментариев
				'absence-of-digits-in-numeric-character-reference': true,
				'cdata-in-html-content': true,
				'character-reference-outside-unicode-range': true,
				'control-character-in-input-stream': true,
				'control-character-reference': true,
				'eof-before-tag-name': true,
				'eof-in-cdata': true,
				'eof-in-comment': true,
				'eof-in-tag': true,
				'incorrectly-closed-comment': true,
				'incorrectly-opened-comment': true,
				'invalid-first-character-of-tag-name': true,
				'missing-attribute-value': true,
				'missing-end-tag-name': true,
				'missing-semicolon-after-character-reference': true,
				'missing-whitespace-between-attributes': true,
				'nested-comment': true,
				'noncharacter-character-reference': true,
				'noncharacter-in-input-stream': true,
				'null-character-reference': true,
				'surrogate-character-reference': true,
				'surrogate-in-input-stream': true,
				'unexpected-character-in-attribute-name': true,
				'unexpected-character-in-unquoted-attribute-value': true,
				'unexpected-equals-sign-before-attribute-name': true,
				'unexpected-null-character': true,
				'unexpected-question-mark-instead-of-tag-name': true,
				'unexpected-solidus-in-tag': true,
				'unknown-named-character-reference': true,
				'end-tag-with-attributes': true, // проверка на то, содержит ли конечный тег какие-то атрибуты
				'duplicate-attribute': true, // проверка на дублирующиеся атрибуты
				'end-tag-with-trailing-solidus': true,
				'non-void-html-element-start-tag-with-trailing-solidus': false,
				'x-invalid-end-tag': true, // выдаёт ошибку, если есть закрытый тег, но не открытый
				'x-invalid-namespace': true,
			},
		], // выдает ошибку при не правильном синтаксисе template, https://eslint.vuejs.org/rules/no-parsing-error.html
		'vue/no-reserved-component-names': 'error', // запрет на создание vue-компонента с таким же названием, как html-тег.
		'vue/no-reserved-keys': 'error', // запрет на использование зарезервированных vue ключевых слов в переменных и т.п.
		'vue/no-reserved-props': 'error', // запрещает использовать зарезервированные слова в пропсах
		'vue/no-shared-component-data': 'error', // выдаёт ошибку, если попытаться data сделать не функцией, а просто объектом.
		'vue/no-side-effects-in-computed-properties': 'error', // запрет на дополнительные действия в computed-выражении
		'vue/no-template-key': 'error', // запрет key на template
		'vue/no-unused-components': 'error', // запрещает не используемые компоненты
		'vue/no-unused-vars': 'error', // запрещает не используемые переменные в template
		'vue/no-use-computed-property-like-method': 'error', // запрещает использовать computed как функцию
		'vue/no-use-v-if-with-v-for': 'error', // запрет на использование v-if + v-for на одном теге
		'vue/no-useless-template-attributes': 'error', // запрещает не нужные атрибуты в <template>
		'vue/no-v-text-v-html-on-component': 'error', // запрещает использовать v-text и v-html на кастомных компонентах
		'vue/require-component-is': 'error', // запрещает передавать пропс is без v-bind
		'vue/require-prop-type-constructor': 'error', // требует обязательного заполнения типа передаваемого пропса
		'vue/require-v-for-key': 'error', // требует обязательный key в v-for
		'vue/require-valid-default-prop': 'error', // проверяет синтаксис дефолтного значения пропса, для объекта это должна быть функция с возвращаемым значением, а не просто {}
		'vue/return-in-computed-property': 'error', // требует return в computed
		'vue/valid-attribute-name': 'error', // запрещает невозможные атрибуты html в template
		'vue/valid-next-tick': 'error', // требует обработку nextTick с помощью await, promise
		'vue/valid-v-bind': 'error', // проверяет синтаксис v-bind
		'vue/valid-v-cloak': 'error', // проверяет синтаксис v-cloak
		'vue/valid-v-else-if': 'error', // проверяет синтаксис v-else-if
		'vue/valid-v-else': 'error',
		'vue/valid-v-for': 'error',
		'vue/valid-v-html': 'error',
		'vue/valid-v-if': 'error',
		'vue/valid-v-model': 'error',
		'vue/valid-v-on': 'error',
		'vue/valid-v-once': 'error',
		'vue/valid-v-pre': 'error',
		'vue/valid-v-show': 'error',
		'vue/valid-v-slot': 'error',
		'vue/valid-v-text': 'error',
		'vue/no-multiple-template-root': 'error', // запрет на несколько root-тегов у компонента
		'vue/no-static-inline-styles': 'error', // ошибки при попытке использовать inline стили статичные
		'vue/no-unused-properties': [
			'error',
			{
				groups: ['props', 'data', 'computed', 'methods'], // запрещает использовать не используемые переменные/методы тут
				deepData: false,
				ignorePublicMembers: false,
			},
		],
		'vue/no-unused-refs': 'error', // запрет на ref, которые не используются
		'vue/no-useless-mustaches': 'error', // запрет на бесполезные мусташи
		'vue/no-useless-v-bind': 'error', // Запрет на бесполезные v-bind со статичным значением
		'vue/prefer-separate-static-class': 'error', // запрет на передачу классовых имен в v-bind, если они статичны
		'vue/prefer-true-attribute-shorthand': 'error', // запрет на передачу :show="true", чтобы передавать сокращённо show
		'vue/html-indent': 'off', // выключает предупреждение о том, что в template не два пробела, а таб.
		'vue/attribute-hyphenation': 'off', // выключает требования к форматированию названия пропа
		'vue/singleline-html-element-content-newline': 'off', // <h2>{text}</h2> ругается, что надо разнести на разные строки
		'vue/v-slot-style': 'off', // выключает требования к стилю v-slot
		'import/no-named-as-default-member': 'off', // ругается на Vue.set(), требует импортирования set из пакета Vue, а не образения к Vue.set()
		'vue/no-v-html': 'warn', // предупреждать о том, что v-html ведёт к не очень хорошим последствиям.
		'vue/no-v-text': 'warn', // предупреждать о том, что v-text ведёт к не очень хорошим последствиям.
		'max-params': ['error', 3], // максимальное количество параметров функции
		'vue/order-in-components': [
			'warn',
			{
				// рекомендуемый порядок options api от самого vue
				order: [
					'el',
					'name',
					'key',
					'parent',
					'functional',
					['delimiters', 'comments'],
					['components', 'directives', 'filters'],
					'extends',
					'mixins',
					['provide', 'inject'],
					'ROUTER_GUARDS',
					'layout',
					'middleware',
					'validate',
					'scrollToTop',
					'transition',
					'loading',
					'inheritAttrs',
					'model',
					['props', 'propsData'],
					'emits',
					'setup',
					'asyncData',
					'data',
					'fetch',
					'head',
					'computed',
					'watch',
					'watchQuery',
					'LIFECYCLE_HOOKS',
					'methods',
					['template', 'render'],
					'renderError',
				],
			},
		],
		'vue/attributes-order': [
			'warn',
			{
				// рекомендуемый vue порядок атрибутов у тегов в template
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					['UNIQUE', 'SLOT'],
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'OTHER_ATTR',
					'EVENTS',
					'CONTENT',
				],
				alphabetical: false, // отключение алфавитного порядка пропов
			},
		],
		'vue/require-default-prop': 'error', // требовать в пропах либо default значение, либо required: true.

		// i18n
		'@intlify/vue-i18n/no-dynamic-keys': 'off', // выключает запрет на использование динамических ключей
		'@intlify/vue-i18n/no-unused-keys': 'warn', // предупреждение о неиспользуемом ключе локализации
		'@intlify/vue-i18n/no-raw-text': [
			'warn',
			{
				attributes: {},
				ignoreNodes: [],
				ignoreText: [],
				// TODO: игнорирование чисел и символов в regex
				ignorePattern: '',
			},
		], // предупреждает о том, что используется обычный текст, а не переведённый ключ в коде
		'@intlify/vue-i18n/no-html-messages': 'error', // запрет на использование html в сообщениях перевода
		'@intlify/vue-i18n/no-missing-keys': 'error', // запрет на использование не существующего ключа локализации
		'@intlify/vue-i18n/no-v-html': 'error', // запрет на попытку локализации в v-html
		'@intlify/vue-i18n/valid-message-syntax': 'error', // запрещает не валидные сообщения в ключах локализации

		'@intlify/vue-i18n/key-format-style': [
			'error',
			'camelCase',
			{
				allowArray: false,
				splitByDots: false,
			},
		], // запрещает любой вид ключей кроме camelCase
		'@intlify/vue-i18n/no-duplicate-keys-in-locale': 'error', // запрет на дубликаты ключей в локализации
		'@intlify/vue-i18n/no-missing-keys-in-other-locales': 'error', // запрещает использовать ключ, имеющийся не во всех файлах локализации
		'@intlify/vue-i18n/no-unknown-locale': 'error', // запрещает неизвестные ключи локализации
	},
};
