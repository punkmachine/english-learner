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
							:class="{'dictionary-page__tr-bg': index % 2 !== 0}"
						>
							<td> {{ index }} </td>
							<!-- TODO: сделать слова с больших букв -->
							<td> {{ word['word_variants_ru'].join(', ') }} </td>
							<td> {{ word['word_variants_en'].join(', ') }} </td>
							<td>
								<div class="dictionary-page__btn-group d-flex">
									<v-btn
										icon="mdi-pencil"
										class="el-btn el-text-white"
										size="x-small"
									/>
									<v-btn
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
					<v-card-title>Поиск</v-card-title>
					<v-card-text>
						<v-text-field
							label="Поиск..."
							append-inner-icon="mdi-magnify"
						/>
					</v-card-text>
				</v-card>
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
	</div>
</template>

<script>
export default {
	data() {
		return {
			heightTable: window.innerHeight - 65*2,
			wordList: [],
			enWord: '',
			ruWord: '',
			wordsRuAddingList: [],
			wordsEnAddingList: [],
		}
	},
	mounted() {
		this.axios.get(`${process.env.VUE_APP_API_URL}/word-list`).then((response) => {
			this.wordList = response.data;
		});
	},
	methods: {
		addWordToList() {
			const request = {
				words: [{
					wordsEn: this.wordsEnAddingList,
					wordsRu: this.wordsRuAddingList,
				}]
			};

			if (this.wordsRuAddingList.length > 0 && this.wordsEnAddingList.length > 0) {
				this.axios.post(`${process.env.VUE_APP_API_URL}/new-words`, request).then((response) => {
					// TODO: нормальный вывод сообщения успешно
					console.log(response);
				});
			}
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
			delete this.wordsRuAddingList[index];
		},
		clearRuInput() {
			this.ruWord = '';
		},
		clearEnInput() {
			this.enWord = '';
		}
	}
}
</script>

<style lang="scss" scoped>
.dictionary-page {
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 40px;

	&__tr-bg {
		background-color: #f5f5f5;

		&:hover {
			background-color: #fff !important;
		}
	}

	&__cards {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		gap: 20px;
	}

	&__btn-group {
		gap: 10px;
	}
}
</style>