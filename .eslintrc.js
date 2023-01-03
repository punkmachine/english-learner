module.exports = {
  "root": true,
  "env": {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    // 'plugin:@intlify/vue-i18n/recommended'
  ],
  "parserOptions": {
    parser: '@babel/eslint-parser'
  },
  "rules": {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // нет консоль логам в проде!
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // нет дебаггеру!
    'no-var': 'error', // нельзя использоваь var
    'no-duplicate-imports': 'error', // нельзя делать дублирующиеся импорты
    'no-duplicate-case': 'error', // нельзя использовать дублирующийся case
    'no-unused-vars': 'warn', // предупреждения о не используемых переменных
    'no-lonely-if': 'off', // если включить, в блоке else нельзя будет оставлять только один if/else
    'no-inline-comments': 'off', // пока не выключил, ругалось на комментарии в коде в той же строке, что и код
    'no-extra-boolean-cast': 'off', // выключает запрет на использование двойного отрицания
    'no-extra-semi': 'error', // запрещает не нужные точки с запятой
    'spaced-comment': 'off', // если включить, будет требоваться пробел перед комментом
    'prefer-const': 'off', // отключает требование к объявлению всех неизменяемых переменных как констант
    'no-whitespace-before-property': 'error', // запрещает пробелы перед методами
    'no-trailing-spaces': 'off', // если включить, то будет ругаться на пробелы в конце строк
    'no-multi-spaces': 'error', // запрещает несколько подряд идущих пробелов
    'vue/no-async-in-computed-properties': 'error', // ошибки при попытке завести асинхронный computed
    'vue/no-v-html': 'error', // запрет v-html
    'vue/no-v-text': 'error', // запрет v-text
    'vue/no-computed-properties-in-data': 'error', // запрещает использование computed свойств в data
    'vue/no-dupe-keys': 'error', // запрет на дублирование имен полей в разных местах объекта настройки компонента
    'vue/no-dupe-v-else-if': 'error', // запрет на повторяющиеся условия v-if/v-else/v-else-if
    'vue/no-duplicate-attributes': 'error', // запрет на дублирующиеся атрибуты
    'vue/no-mutating-props': 'error', // запрет на мутирование props
    'vue/no-reserved-keys': 'error', // запрет на перезапись зарезервированных ключей
    'vue/no-reserved-component-names': 'error', // запрет на использование зарезервированных имен в именах компонентов
    'vue/no-reserved-props': 'error', //Запретить зарезервированные имена в свойствах
    'vue/no-unused-components': 'warn', // ворнинги при регистрации компонента, который не используется
    'vue/no-use-v-if-with-v-for': 'error', // запрет на использование в блоке v-for и v-if одновременно
    'vue/no-useless-template-attributes': 'error', // запрет на не поддерживаемые атрибуты в template
    'vue/require-prop-type-constructor': 'error', // трубует указание настроек пропса при его передаче
    'vue/require-v-for-key': 'error', // требует обязательного заполнения key в v-for
    'vue/return-in-computed-property': 'error', // требует обязательного return в computed
    'vue/no-deprecated-destroyed-lifecycle': 'error', // запрет на deprecated хуки жизненного цикла
    'vue/html-closing-bracket-newline': 'error', // требует правильного закрытия тега
    'vue/html-closing-bracket-spacing': 'error', // просит пробел перед закрытием тега с помощью >
    'vue/html-end-tags': 'error', // требует закрывающий тег
    "vue/html-indent": ["error", "tab", {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }], // требует равномерный отступ в template
    'vue/html-quotes': [ 'error', 'double', { 'avoidEscape': false } ], // заставляет использовать двойные кавычки в Html атрибутах
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1
      },
      'multiline': {
        'max': 1
      }
    }], // настраивает максимально возможное количество атрибутов в строке
    'vue/mustache-interpolation-spacing': ['error', 'always'], // заставляет всегда ставить пробел в {{ var }} в template шаблоне
    'vue/no-multi-spaces': 'error', // запрет на использование нескольких пробелов подряд
    'vue/no-spaces-around-equal-signs-in-attribute': 'error', // запрещает пробелы вокруг знаков равенства в атрибуте
    'vue/require-prop-types': 'error', // требует указания типа пропса обязательно
    'vue/no-static-inline-styles': 'error', // запрещает использовать inline-style
    'vue/no-unused-refs': 'warn', // предупреждает о не используемых refs
    'vue/multi-word-component-names': 'off', // выключает требование составлять имена компонентов из нескольких слов
    'quote-props': ["error", "consistent"], // чтобы кавычки в объявлениях ключей объектов были единого стиля
    'no-unneeded-ternary': 'off', // как бы выключает лишние тернарные операторы, на самом деле мешая нужным
    'no-unreachable-loop': 'error', // запрещает циклы, которые повторяются всего один раз.
    'no-constant-condition': 'error', // запрещает постоянное значение в условных конструкциях (if (true) {})
    'array-callback-return': 'error', // выдает ошибку, если в методах массива, предусматривающих return, он не обнаружен
    'for-direction': 'error', // выдает ошибку, если была попытка пустить for от 1 до 10, но в i--.
    'no-cond-assign': 'error', // запрещает оператор присванивания в условных конструкциях
    'no-const-assign': 'error', // сразу выдает ошибку о попытке изменить константу в коде
    'no-dupe-args': 'error', // запрещает дублирование имен аргументов в функции
    'no-fallthrough': 'error', // выдает ошибку, если в case не встретилось break/return/throw
    'no-ex-assign': 'error', // запрещает переопределение error в catch-блоке
    'no-empty-pattern': 'error', // запрещает пустые шаблоны деструктурирования.
    'no-import-assign': 'error', // выдает ошибку при попытке изменить то, что было импортировано.
    'no-func-assign': 'error', // выдает ошибку, если попытаться переназначить функцию.
  }
}
