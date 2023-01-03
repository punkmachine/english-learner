<template>
	<div class="dictionary-page py-5 px-5">
		<Alert
			v-model="errorData.visible"
			color="error"
			icon="$error"
			:text="`Error Status: ${errorData.status}`"
		/>

		<div class="dictionary-page__col">
			<TableWrapper
				classTable="dictionary-page__table"
				:loading="loading"
			>
				<template #thead>
					<tr>
						<th width="85px">
							{{ $t('shared.tables.numberColumn') }}
						</th>
						<th width="50%">На русском</th>
						<th width="50%">На английском</th>
						<th width="60px">Действия</th>
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

import { loadDataWrapperHook } from '@/hooks/loadData';
import { errorHandlerHook } from '@/hooks/errorHandler';

import TableWrapper from '@/components/shared/TableWrapper.vue';
import Alert from '@/components/shared/Alert.vue';
import SearchWords from '@/components/dictionaryPage/SearchWord.vue';
import WordList from '@/components/dictionaryPage/WordList.vue';
import AddWordCard from '@/components/dictionaryPage/AddWordCard.vue';
import ModalEditCard from '@/components/dictionaryPage/ModalEditCard.vue';

export default {
	components: {
		SearchWords, AddWordCard,
		TableWrapper, WordList,
		ModalEditCard, Alert
	},
	setup() {
		const axios = inject('axios');

		const { loading, loadData } = loadDataWrapperHook();
		const { errorData, errorHandler } = errorHandlerHook();

		const wordList = ref([]);
		const visibleModalEditWord = ref(false);
		const editedWord = ref({});

		function editWordClick(id) {
			visibleModalEditWord.value = true;
			editedWord.value = wordList.value.find(word => word.id === id);
		}

		function closeModalEditWord() {
			visibleModalEditWord.value = false;
		}

		function getWordsList() {
			axios
				.get(`${process.env.VUE_APP_API_URL}/word-list`)
				.then(response => {
					wordList.value = response.data;
				});
		}

		function addWordToList(request) {
			axios
				.post(`${process.env.VUE_APP_API_URL}/new-word`, request)
				.then(response => {
					// TODO: нормальный вывод сообщения успешно
					console.log('response >>>', response);
					getWordsList();
				})
				.catch(error => {
					errorHandler(error);
				});
		}

		function deleteWord(id) {
			axios
				.delete(`${process.env.VUE_APP_API_URL}/delete-word?id=${id}`)
				.then(response => {
					// TODO: нормальный вывод сообщения успешно
					console.log(response);
					getWordsList();
				})
				.catch(error => {
					errorHandler(error);
				});
		}

		function updateWord(request) {
			axios
				.patch(`${process.env.VUE_APP_API_URL}/update-word?id=${editedWord.value.id}`, request)
				.then(response => {
					// TODO: нормальный вывод сообщения успешно
					console.log(response);
					getWordsList();
					closeModalEditWord();
				})
				.catch(error => {
					errorHandler(error);
				});
		}

		onMounted(() => {
			loadData(getWordsList);
		});

		return {
			loading,
			errorData,
			wordList,
			visibleModalEditWord,
			editedWord,
			addWordToList, deleteWord, editWordClick, updateWord,
			closeModalEditWord
		};
	}
}
</script>
