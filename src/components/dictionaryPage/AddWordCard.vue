<template>
	<v-card>
		<v-card-title>Добавление слова</v-card-title>
		<v-card-text>
			<!-- TODO: добавление слова не только по пробелу, но и по запятой -->
			<!-- TODO: добавить галочку иконкой, которая будет добавлять слово -->
			<InputAddWord
				v-model.trim="ruWord"
				@keypress.space="addRuWordToInput"
				@click:clear="clearRuInput"
				@clickDeleteWord="deleteWordInRuAddingList"
				:wordsList="wordsRuAddingList"
				label="Введите слово и его синонимы на русском..."
				class="mb-3"
			/>

			<InputAddWord
				v-model.trim="enWord"
				@keypress.space="addEnWordToInput"
				@click:clear="clearEnInput"
				@keypress.enter="addWordToList"
				@clickDeleteWord="deleteWordInEnAddingList"
				:wordsList="wordsEnAddingList"
				label="Введите слово и его синонимы на английском..."
			/>
		</v-card-text>
		<v-card-actions>
			<!-- TODO: если нажимать enter и слова пустые, запрос происходит и выдает 200 -->
			<v-btn
				block
				color="primary"
				@click="addWordToList"
				class="el-text-white"
				prepend-icon="mdi-plus-box"
				:disabled="wordsEnAddingList.length === 0 || wordsRuAddingList.length === 0"
			>
				Добавить
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { ref } from 'vue';
import InputAddWord from '@/components/dictionaryPage/InputAddWord.vue';

export default {
	components: {
		InputAddWord,
	},
	setup(props, { emit }) {
		const enWord = ref('');
		const ruWord = ref('');
		const wordsRuAddingList = ref([]);
		const wordsEnAddingList = ref([]);

		function addRuWordToInput() {
			if (ruWord.value.length > 0) {
				wordsRuAddingList.value.push(ruWord.value.trim());
				ruWord.value = '';
			}
		}

		function addEnWordToInput() {
			if (enWord.value.length > 0) {
				wordsEnAddingList.value.push(enWord.value.trim());
				enWord.value = '';
			}
		}

		function clearRuInput() {
			ruWord.value = '';
		}

		function clearEnInput() {
			enWord.value = '';
		}

		function deleteWordInRuAddingList(index) {
			wordsRuAddingList.value.splice(index, 1);
		}

		function deleteWordInEnAddingList(index) {
			wordsEnAddingList.value.splice(index, 1);
		}

		function addWordToList() {
			const request = {
				words: [{
					wordsEn: wordsEnAddingList.value,
					wordsRu: wordsRuAddingList.value,
				}]
			};

			emit('addWordToList', request);
			wordsEnAddingList.value = [];
			wordsRuAddingList.value = [];
		}

		return {
			enWord, ruWord,
			wordsRuAddingList, wordsEnAddingList,
			addEnWordToInput, addRuWordToInput,
			clearRuInput, clearEnInput,
			deleteWordInRuAddingList, deleteWordInEnAddingList,
			addWordToList,
		}
	}
};
</script>
