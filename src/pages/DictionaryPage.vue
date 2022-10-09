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
import TableWrapper from '@/components/shared/TableWrapper.vue';
import SearchWords from '@/components/dictionaryPage/SearchWord.vue';
import WordList from '@/components/dictionaryPage/WordList.vue';
import AddWordCard from '@/components/dictionaryPage/AddWordCard.vue';
import ModalEditCard from '@/components/dictionaryPage/ModalEditCard.vue';

export default {
	data() {
		return {
			loading: false,
			wordList: [],

			visibleModalEditWord: false,
			editedWord: {},
		}
	},
	components: {
		SearchWords, AddWordCard,
		TableWrapper, WordList,
		ModalEditCard
	},
	mounted() {
		this.getWordsList();
	},
	methods: {
		getWordsList() {
			this.loading = true;

			this.axios.get(`${process.env.VUE_APP_API_URL}/word-list`).then(response => {
				this.wordList = response.data;
			});

			this.loading = false;
		},
		addWordToList(request) {
			// TODO: обработка catch
			this.axios.post(`${process.env.VUE_APP_API_URL}/new-words`, request).then(response => {
				// TODO: нормальный вывод сообщения успешно
				console.log(response);
				this.getWordsList();
			});
		},
		deleteWord(id) {
			// TODO: обработка catch
			this.axios.delete(`${process.env.VUE_APP_API_URL}/delete-word?id=${id}`).then(response => {
				// TODO: нормальный вывод сообщения успешно
				console.log(response);
				this.getWordsList();
			});
		},
		editWordClick(id) {
			this.visibleModalEditWord = true;
			this.editedWord = this.wordList.find(word => word.id === id);
		},
		updateWord(request) {
			// TODO: нормальный catch
			this.axios.patch(`${process.env.VUE_APP_API_URL}/update-word?id=${this.editedWord.id}`, request).then(response => {
				// TODO: нормальный вывод сообщения успешно
				console.log(response);
				this.getWordsList();
			});
		},
		closeModalEditWord() {
			this.visibleModalEditWord = false;
		},
	}
}
</script>