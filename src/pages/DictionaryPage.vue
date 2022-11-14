<template>
	<div class="dictionary-page py-5 px-5">
		<div class="dictionary-page__col">
			<TableWrapper :classTable="'dictionary-page__table'">
				<template #thead>
					<tr>
						<th
							class="text-left"
							width="85px"
						>
							Номер
						</th>
						<th
							class="text-left"
							width="50%"
						>
							На русском
						</th>
						<th
							class="text-left"
							width="50%"
						>
							На английском
						</th>
						<th
							class="text-left"
							width="60px"
						>
							Действия
						</th>
					</tr>
				</template>

				<template #tbody>
					<WordList
						:wordList="wordList"
						@editWordClick="editWordClick"
						@deleteWord="deleteWord"
					/>
				</template>

				<template #tfoot>
					<tr>
						<th class="text-left">Номер</th>
						<th class="text-left">На русском</th>
						<th class="text-left">На английском</th>
						<th
							class="text-left"
							width="60px"
						>
							Действия
						</th>
					</tr>
				</template>
			</TableWrapper>
		</div>
		<div class="dictionary-page__col">
			<div class="dictionary-page__cards">
				<SearchWords />
				<AddWordCard @addWordToList="addWordToList" />
			</div>
		</div>

		<v-dialog v-model="visibleModalEditWord">
			<ModalEditCard
				@closeModalEditWord="closeModalEditWord"
				@updateWord="updateWord"
				:initialStateWord="editedWord"
			/>
		</v-dialog>
	</div>
</template>

<script>
import { ref, inject, onMounted } from 'vue';

import TableWrapper from '@/components/shared/TableWrapper.vue';
import SearchWords from '@/components/dictionaryPage/SearchWord.vue';
import WordList from '@/components/dictionaryPage/WordList.vue';
import AddWordCard from '@/components/dictionaryPage/AddWordCard.vue';
import ModalEditCard from '@/components/dictionaryPage/ModalEditCard.vue';

export default {
	components: {
		SearchWords, AddWordCard,
		TableWrapper, WordList,
		ModalEditCard
	},
	setup(props, context) {
		const axios = inject('axios');

		const loading = ref(false);
		const wordList = ref([]);
		const visibleModalEditWord = ref(false);
		const editedWord = ref({});

		function getWordsList() {
			loading.value = true;

			// TODO: loading статус - лоадер.
			axios
				.get(`${process.env.VUE_APP_API_URL}/word-list`)
				.then(response => {
					wordList.value = response.data;
				});

			loading.value = false;
		}

		function addWordToList(request) {
			// TODO: обработка catch
			axios
				.post(`${process.env.VUE_APP_API_URL}/new-words`, request)
				.then(response => {
					// TODO: нормальный вывод сообщения успешно
					console.log(response);
					getWordsList();
				});
		}

		function deleteWord(id) {
			// TODO: обработка catch
			axios
				.delete(`${process.env.VUE_APP_API_URL}/delete-word?id=${id}`)
				.then(response => {
					// TODO: нормальный вывод сообщения успешно
					console.log(response);
					getWordsList();
				});
		}

		function editWordClick(id) {
			visibleModalEditWord.value = true;
			editedWord.value = wordList.value.find(word => word.id === id);
		}

		function updateWord(request) {
			// TODO: нормальный catch
			axios
				.patch(`${process.env.VUE_APP_API_URL}/update-word?id=${editedWord.value.id}`, request)
				.then(response => {
					// TODO: нормальный вывод сообщения успешно
					console.log(response);
					getWordsList();
					closeModalEditWord();
				});
		}

		function closeModalEditWord() {
			visibleModalEditWord.value = false;
		}

		onMounted(() => {
			getWordsList();
		});

		return {
			loading,
			wordList,
			visibleModalEditWord,
			editedWord,
			addWordToList, deleteWord, editWordClick, updateWord,
			closeModalEditWord
		};
	}
}
</script>