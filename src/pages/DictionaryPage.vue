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
			<v-card
				max-width="500px"
				min-width="500px"
			>
				<v-card-title class="py-2 px-4">Редактирование слова</v-card-title>
				<v-divider />

				<v-card-text class="pa-4">
					<div class="d-flex flex-column gap-3">
						<div>
							<strong>Слова на русском:</strong>
							<div class="d-flex align-center">
								<v-text-field
									v-model.trim="ruEditWord"
									@keypress.space="addRuWordToInputEditing"
									@click:clear="clearRuEditingInput"
									clearable
									label="Введите слово и его синонимы на русском..."
								>
									<!-- TODO: убрать паддинги -->
									<!-- TODO: выровнять chip слева -->
									<template #details>
										<v-chip-group column>
											<v-chip
												v-for="(word, index) in wordsRuEditingList"
												:key="index"
												@click:close="deleteWordInRuEditingList(index)"
												@click="changeEditWordRu(word)"
												closable
												size="small"
											>
												{{ word }}
											</v-chip>

											<v-chip
												v-if="wordsRuEditingList.length > 0"
												@click="clearRuEditingList"
												size="small"
											>
												<v-icon
													start
													icon="mdi-close"
												/>
												Очистить
											</v-chip>
										</v-chip-group>
									</template>
								</v-text-field>
							</div>
						</div>

						<div>
							<strong>Слова на английском:</strong>
							<div class="d-flex align-center">
								<v-text-field
									v-model.trim="enEditWord"
									@keypress.space="addEnWordToInputEditing"
									@keypress.enter="updateWord"
									@click:clear="clearEnEditingInput"
									clearable
									label="Введите слово и его синонимы на английском..."
								>
									<template #details>
										<v-chip-group column>
											<v-chip
												v-for="(word, index) in wordsEnEditingList"
												:key="index"
												@click:close="deleteWordInEnEditingList(index)"
												@click="changeEditWordEn(word)"
												closable
												size="small"
											>
												{{ word }}
											</v-chip>

											<v-chip
												v-if="wordsEnEditingList.length > 0"
												@click="clearEnEditingList"
												size="small"
											>
												<v-icon
													start
													icon="mdi-close"
												/>
												Очистить
											</v-chip>
										</v-chip-group>
									</template>
								</v-text-field>
							</div>
						</div>
					</div>
				</v-card-text>
				<v-card-actions>
					<div class="d-flex justify-space-between w-100 px-2 mt-4">
						<v-btn
							class="el-btn el-text-white w-50"
							prepend-icon="mdi-check"
							@click="updateWord"
							:disabled="wordsRuEditingList.length === 0 || wordsEnEditingList.length === 0"
						>
							Обновить
						</v-btn>
						<v-btn
							@click="closeModalEditWord"
							class="el-btn el-text-white w-50"
							prepend-icon="mdi-close"
						>
							Закрыть
						</v-btn>
					</div>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import TableWrapper from '@/components/shared/TableWrapper.vue';
import SearchWords from '@/components/dictionaryPage/SearchWord.vue';
import WordList from '@/components/dictionaryPage/WordList.vue';
import AddWordCard from '@/components/dictionaryPage/AddWordCard.vue';

export default {
	data() {
		return {
			loading: false,
			wordList: [],

			wordsRuAddingList: [],
			wordsEnAddingList: [],

			visibleModalEditWord: false,
			editedWordId: null,
			wordsRuEditingList: [],
			wordsEnEditingList: [],
			ruEditWord: '',
			enEditWord: '',
		}
	},
	components: {
		SearchWords, AddWordCard,
		TableWrapper, WordList,
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
			this.editedWordId = id;

			const editedWord = this.wordList.find(word => word.id === this.editedWordId);

			this.wordsRuEditingList = editedWord['word_variants_ru'].length > 0 ? [...editedWord['word_variants_ru']] : [];
			this.wordsEnEditingList = editedWord['word_variants_en'].length > 0 ? [...editedWord['word_variants_en']] : [];
		},
		updateWord() {
			const request = {
				wordsEn: this.wordsEnEditingList,
				wordsRu: this.wordsRuEditingList,
			};

			this.loading = true;

			// TODO: нормальный catch
			this.axios.patch(`${process.env.VUE_APP_API_URL}/update-word?id=${this.editedWordId}`, request).then(response => {
				// TODO: нормальный вывод сообщения успешно
				console.log(response);
				this.getWordsList();
			});

			this.loading = false;
		},
		clearEnEditingList() {
			this.wordsEnEditingList = [];
		},
		clearRuEditingList() {
			this.wordsRuEditingList = [];
		},
		closeModalEditWord() {
			this.visibleModalEditWord = false;
		},
		deleteWordInRuEditingList(index) {
			this.wordsRuEditingList.splice(index, 1);
		},
		deleteWordInEnEditingList(index) {
			this.wordsEnEditingList.splice(index, 1);
		},
		changeEditWordEn(word) {
			this.enEditWord = word;
		},
		changeEditWordRu(word) {
			this.ruEditWord = word;
		},
		addEnWordToInputEditing() {
			this.wordsEnEditingList.push(this.enEditWord);
			this.enEditWord = '';
		},
		addRuWordToInputEditing() {
			this.wordsRuEditingList.push(this.ruEditWord);
			this.ruEditWord = '';
		},
		clearEnEditingInput() {
			this.enEditWord = '';
		},
		clearRuEditingInput() {
			this.ruEditWord = '';
		},
	}
}
</script>