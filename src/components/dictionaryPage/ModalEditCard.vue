<template>
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

									<ClearChips
										v-if="wordsRuEditingList.length > 0"
										@click="clearRuEditingList"
									/>
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

									<ClearChips
										v-if="wordsEnEditingList.length > 0"
										@click="clearEnEditingList"
									/>
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
					color="primary"
					class="el-text-white w-50"
					prepend-icon="mdi-check"
					@click="updateWord"
					:disabled="wordsRuEditingList.length === 0 || wordsEnEditingList.length === 0"
				>
					Обновить
				</v-btn>
				<v-btn
					color="primary"
					@click="closeModalEditWord"
					class="el-text-white w-50"
					prepend-icon="mdi-close"
				>
					Закрыть
				</v-btn>
			</div>
		</v-card-actions>
	</v-card>
</template>

<script>
import { ref, toRefs } from 'vue';
import ClearChips from '@/components/dictionaryPage/ClearChips.vue';

export default {
	props: {
		initialStateWord: {
			type: Object,
			required: true,
		}
	},
	components: {
		ClearChips,
	},
	setup(props, { emit }) {
		const { initialStateWord } = toRefs(props);

		const ruEditWord = ref('');
		const enEditWord = ref('');
		const wordsRuEditingList = ref(initialStateWord.value['word_variants_ru'].length > 0 ? [...initialStateWord.value['word_variants_ru']] : []);
		const wordsEnEditingList = ref(initialStateWord.value['word_variants_en'].length > 0 ? [...initialStateWord.value['word_variants_en']] : []);

		function addEnWordToInputEditing() {
			wordsEnEditingList.value.push(enEditWord.value.trim());
			enEditWord.value = '';
		}

		function addRuWordToInputEditing() {
			wordsRuEditingList.value.push(ruEditWord.value.trim());
			ruEditWord.value = '';
		}

		function clearEnEditingInput() {
			enEditWord.value = '';
		}

		function clearRuEditingInput() {
			ruEditWord.value = '';
		}

		function deleteWordInRuEditingList(index) {
			wordsRuEditingList.value.splice(index, 1);
		}

		function deleteWordInEnEditingList(index) {
			wordsEnEditingList.value.splice(index, 1);
		}

		function changeEditWordEn(word) {
			enEditWord.value = word;
		}

		function changeEditWordRu(word) {
			ruEditWord.value = word;
		}

		function clearEnEditingList() {
			wordsEnEditingList.value = [];
		}

		function clearRuEditingList() {
			wordsRuEditingList.value = [];
		}

		function closeModalEditWord() {
			emit('closeModalEditWord');
		}

		function updateWord() {
			const request = {
				wordsEn: wordsEnEditingList.value,
				wordsRu: wordsRuEditingList.value,
			};

			emit('updateWord', request);
		}

		return {
			ruEditWord, enEditWord,
			wordsRuEditingList, wordsEnEditingList,
			addEnWordToInputEditing, addRuWordToInputEditing,
			clearEnEditingInput, clearRuEditingInput,
			deleteWordInRuEditingList, deleteWordInEnEditingList,
			changeEditWordEn, changeEditWordRu,
			clearEnEditingList, clearRuEditingList,
			closeModalEditWord, updateWord,
		};
	}
};
</script>
