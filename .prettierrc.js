module.exports = {
	tabWidth: 4,
	printWidth: 160,
	useTabs: true,
	semi: true,
	singleQuote: true,
	quoteProps: 'consistent',
	trailingComma: 'es5',
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'avoid',
	endOfLine: 'lf',
	embeddedLanguageFormatting: 'off',
	singleAttributePerLine: true,
};

/*
- **tabWidth** - длина таба.
- **printWidth** - длина строки.
- **useTabs** - использование табов.
- **semi** - использование точек с запятой.
- **singleQuote** - использование одинарных кавычек вместо двойных.
- **quoteProps** - настройка кавычек в объявление ключей объекта.
- **trailingComma** - запятые в структурах данных, после последнего значения (объекты, массивы)
- **bracketSpacing** - пробелы в объектных литералах `{ foo: bar }`
- **bracketSameLine** - проще на примере:
	Если стоит `true`:
	```html
		<button
			className="prettier-class"
			id="prettier-id"
			onClick={this.handleClick}>
			Click Here
		</button>
	```

	Если стоит `false`:
	```html
		<button
			className="prettier-class"
			id="prettier-id"
			onClick={this.handleClick}
		>
			Click Here
		</button>
	```
- **arrowParens** - вставка круглых скобок вокруг единственного параметра в стрелочных функциях.
- **endOfLine** - переносы строк.
- **singleAttributePerLine** - один атрибут, на одной строке.
- **embeddedLanguageFormatting** - актуально по большей части для md, если у вас есть код на каком-то языке выделенный в кавычки, он будет определять синтаксис и форматировать его.
*/
