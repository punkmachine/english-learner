import { inject, ref } from 'vue';

export function useCRUDWordList(loading, wordList) {
	const axios = inject('axios');

	const wordsEnAddingList = ref([]);
	const wordsRuAddingList = ref([]);

	const wordsRuEditingList = ref([]);
	const wordsEnEditingList = ref([]);
	const editedWordId = ref(null);

	function getWordsList() {
		loading.value = true;

		axios.get(`${process.env.VUE_APP_API_URL}/word-list`).then(response => {
			wordList.value = response.data;
		});

		loading.value = false;
	}

	function addWordToList() {
		// TODO: добавить обработку всех слов на toLowerCase()
		const request = {
			words: [{
				wordsEn: wordsEnAddingList.value,
				wordsRu: wordsRuAddingList.value,
			}]
		};

		if (wordsRuAddingList.value.length > 0 && wordsEnAddingList.value.length > 0) {
			// TODO: обработка catch
			axios.post(`${process.env.VUE_APP_API_URL}/new-words`, request).then(response => {
				// TODO: нормальный вывод сообщения успешно
				console.log(response);
				getWordsList();
				wordsEnAddingList.value = [];
				wordsRuAddingList.value = [];
			});
		}
	}

	function deleteWord(id) {
		// TODO: обработка catch
		axios.delete(`${process.env.VUE_APP_API_URL}/delete-word?id=${id}`).then(response => {
			// TODO: нормальный вывод сообщения успешно
			console.log(response);
			getWordsList();
		});
	}

	function updateWord() {
		// TODO: добавить обработку всех слов на toLowerCase()
		const request = {
			wordsEn: wordsEnEditingList.value,
			wordsRu: wordsRuEditingList.value,
		};

		loading.value = true;

		// TODO: нормальный catch
		axios.patch(`${process.env.VUE_APP_API_URL}/update-word?id=${editedWordId.value}`, request).then(response => {
			// TODO: нормальный вывод сообщения успешно
			console.log(response);
			getWordsList();
		});

		loading.value = false;
	}

	return {
		getWordsList,
		deleteWord,
		wordsEnAddingList, wordsRuAddingList, addWordToList,
		wordsRuEditingList, wordsEnEditingList, updateWord, editedWordId
	};
}