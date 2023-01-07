const ru = {
	shared: {
		tables: {
			numberColumn: 'Номер',
			ru: 'На русском',
			en: 'На английском',
			actions: 'Действия',
		},
		controls: {
			start: 'Старт',
			next: 'След.',
			prev: 'Пред.',
			ready: 'Готово',
			update: 'Обновить',
			close: 'Закрыть',
			clear: 'Очистить',
			add: 'Добавить',
		},
		search: 'Поиск',
	},
	layout: {
		navigation: {
			dictionary: 'Словарь',
			statistics: 'Статистика',
			cards: 'Статистика',
			about: 'О проекте',
		},
		startTest: 'Начать тест',
	},
	testPage: {
		cardTitle: 'Настройки теста',
		countWordsInTest: 'Выберите количество слов в тесте',
		testMode: 'Выберите режим перевода',
		translateWord: 'Переведите слово:',
		wordInRussian: 'Слово на русском...',
		passed: 'Пройдено',
		timeSpent: 'Времени затрачено',
		minutes: 'минут',
	},
	dictionaryPage: {
		editWord: 'Редактирование слово',
		wordInRussian: 'Слова на русском:',
		wordInEnglish: 'Слова на английском:',
		writeWordInRussian: 'Введите слово и его синонимы на русском...',
		writeWordInEnglish: 'Введите слово и его синонимы на английском...',
		addWord: 'Добавление слова',
	},
	errors: {
		ERR_BAD_OPTION_VALUE: 'Ошибка при попытке разобрать параметры запроса.',
		ERR_BAD_OPTION: 'Неизвестные опции запроса.',
		ECONNABORTED: 'Запрос на сервер прерван.',
		ETIMEDOUT: 'Превышен таймаут ожидания ответа сервера.',
		ERR_NETWORK: 'Ошибка передачи данных по сети.',
		ERR_FR_TOO_MANY_REDIRECTS: 'Ошибка большого количества редиректов.',
		ERR_DEPRECATED: 'Ошибка использования устаревших опций запроса.',
		ERR_BAD_RESPONSE: 'Ошибка обработки ответа.',
		ERR_BAD_REQUEST: 'Ошибка обработки запроса.',
		ERR_CANCELED: 'Ошибка. Запрос отменён.',
		ERR_NOT_SUPPORT: 'Опция запроса не поддерживается.',
		ERR_INVALID_URL: 'Ошибка, попытка совершить запрос на неправильный URL.',
	},
};

export default ru;
