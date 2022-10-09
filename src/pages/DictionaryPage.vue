<template>
	<div class="dictionary-page py-5 px-5">
		<div class="dictionary-page__col">
			<v-card>
				<v-table
					fixed-header
					fixed-footer
					class="dictionary-page__table"
					:height="heightTable"
				>
					<thead>
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
					</thead>
					<tbody>
						<!-- TODO: список отображать в lazy -->
						<tr
							v-for="(word, index) in wordList"
							:key="word.id"
							:class="{'dictionary-page__tr-bg': index % 2 === 0}"
						>
							<td> {{ index + 1 }} </td>
							<!-- TODO: сделать слова с больших букв -->
							<td> {{ word['word_variants_ru'].join(', ') }} </td>
							<td> {{ word['word_variants_en'].join(', ') }} </td>
							<td>
								<div class="dictionary-page__btn-group d-flex">
									<v-btn
										@click="editWordClick(word.id)"
										icon="mdi-pencil"
										class="el-btn el-text-white"
										size="x-small"
									/>
									<v-btn
										@click="deleteWord(word.id)"
										icon="mdi-delete"
										class="el-btn el-text-white"
										size="x-small"
									/>
								</div>
							</td>
						</tr>
					</tbody>
					<tfoot>
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
					</tfoot>
				</v-table>
			</v-card>
		</div>
		<div class="dictionary-page__col">
			<div class="dictionary-page__cards">
				<v-card>
					<v-card-title>Добавление слова</v-card-title>
					<v-card-text>
						<!-- TODO: добавление слова не только по пробелу, но и по запятой -->
						<!-- TODO: добавить галочку иконкой, которая будет добавлять слово -->
						<v-text-field
							v-model.trim="ruWord"
							@keypress.space="addRuWordToInput"
							@click:clear="clearRuInput"
							clearable
							label="Введите слово и его синонимы на русском..."
							class="mb-3"
						>
							<!-- TODO: убрать паддинги -->
							<!-- TODO: сделать кнопку очистки -->
							<!-- TODO: выровнять chip слева -->
							<template #details>
								<v-chip-group
									column
								>
									<v-chip
										v-for="(word, index) in wordsRuAddingList"
										:key="index"
										@click:close="deleteWordInRuAddingList(index)"
										closable
										size="small"
									>
										{{ word }}
									</v-chip>
								</v-chip-group>
							</template>
						</v-text-field>

						<v-text-field
							v-model.trim="enWord"
							@keypress.space="addEnWordToInput"
							@keypress.enter="addWordToList"
							@click:clear="clearEnInput"
							clearable
							label="Введите слово и его синонимы на английском..."
						>
							<template #details>
								<v-chip-group
									column
								>
									<v-chip
										v-for="(word, index) in wordsEnAddingList"
										:key="index"
										@click:close="deleteWordInEnAddingList(index)"
										closable
										size="small"
									>
										{{ word }}
									</v-chip>
								</v-chip-group>
							</template>
						</v-text-field>
					</v-card-text>
					<v-card-actions>
						<v-btn
							@click="addWordToList"
							block
							class="el-btn el-text-white"
							prepend-icon="mdi-plus-box"
							:disabled="wordsEnAddingList.length === 0 || wordsRuAddingList.length === 0"
						>
							Добавить
						</v-btn>
					</v-card-actions>
				</v-card>
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
import { ref } from 'vue';
import { useCRUDWordList } from '@/hooks/useCRUDWordList';

export default {
	data() {
		return {
			enWord: '',
			ruWord: '',
		}
	},
	mounted() {
		this.getWordsList();
	},
	methods: {
		editWordClick(id) {
			this.visibleModalEditWord = true;
			this.editedWordId = id;

			const editedWord = this.wordList.find(word => word.id === this.editedWordId);

			this.wordsRuEditingList = editedWord['word_variants_ru'].length > 0 ? [...editedWord['word_variants_ru']] : [];
			this.wordsEnEditingList = editedWord['word_variants_en'].length > 0 ? [...editedWord['word_variants_en']] : [];
		},
		addRuWordToInput() {
			if (this.ruWord.length > 0) {
				this.wordsRuAddingList.push(this.ruWord.trim());
				this.ruWord = '';
			}
		},
		addEnWordToInput() {
			if (this.enWord.length > 0) {
				this.wordsEnAddingList.push(this.enWord.trim());
				this.enWord = '';
			}
		},
		deleteWordInRuAddingList(index) {
			this.wordsRuAddingList.splice(index, 1);
		},
		deleteWordInEnAddingList(index) {
			this.wordsEnAddingList.splice(index, 1);
		},
		clearRuInput() {
			this.ruWord = '';
		},
		clearEnInput() {
			this.enWord = '';
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
	},
	setup(context) {
		const heightTable = window.innerHeight - 65*2;

		const loading = ref(false);
		const wordList = ref([]);

		const visibleModalEditWord = ref(false);
		const ruEditWord = ref('');
		const enEditWord = ref('');

		const {
			getWordsList,
			deleteWord,
			wordsEnAddingList, wordsRuAddingList, addWordToList,
			wordsRuEditingList, wordsEnEditingList, updateWord, editedWordId
		} = useCRUDWordList(loading, wordList);

		return {
			heightTable,

			getWordsList,
			wordList,

			addWordToList,
			wordsRuAddingList,
			wordsEnAddingList,

			deleteWord,

			visibleModalEditWord,
			editedWordId,
			wordsRuEditingList,
			wordsEnEditingList,
			ruEditWord,
			enEditWord,
			updateWord
		}
	}
}
</script>


		}
	}
}
