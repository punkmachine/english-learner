<template>
	<v-card>
		<v-card-title>{{ $t('dictionaryPage.addWord') }}</v-card-title>
		<v-card-text>
			<!-- TODO: добавление слова не только по пробелу, но и по запятой -->
			<!-- TODO: добавить галочку иконкой, которая будет добавлять слово -->
			<InputAddWord
				v-model.trim="ruWord"
				@keypress.space="addRuWordToInput"
				@click:clear="clearInput('ru')"
				@clickDeleteWord="(index) => deleteWordInAddingList('ru', index)"
				@clearWordsList="clearWordsList('ru')"
				:wordsList="wordsRuAddingList"
				:label="$t('dictionaryPage.writeWordInRussian')"
				class="mb-3"
			/>

			<InputAddWord
				v-model.trim="enWord"
				@keypress.space="addEnWordToInput"
				@click:clear="clearInput('en')"
				@keypress.enter="addWordToList"
				@clickDeleteWord="(index) => deleteWordInAddingList('en', index)"
				@clearWordsList="clearWordsList('en')"
				:wordsList="wordsEnAddingList"
				:label="$t('dictionaryPage.writeWordInRussian')"
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
				{{ $t('shared.controls.add') }}
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
			if (ruWord.value.length) {
				wordsRuAddingList.value.push(ruWord.value.trim());
				ruWord.value = '';
			}
		}

		function addEnWordToInput() {
			if (enWord.value.length) {
				wordsEnAddingList.value.push(enWord.value.trim());
				enWord.value = '';
			}
		}

		function clearInput(lang) {
			if (lang === 'ru') {
				ruWord.value = '';
			} else {
				enWord.value = ''
			}
		}

		// <!-- TODO: удаление работает как-то странно -->
		function deleteWordInAddingList(lang, index) {
			if (lang === 'ru') {
				wordsRuAddingList.value.splice(index, 1);
			} else {
				wordsEnAddingList.value.splice(index, 1);
			}
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

		function clearWordsList(lang) {
			if (lang === 'ru') {
				wordsRuAddingList.value = [];
			} else {
				wordsEnAddingList.value = [];
			}
		}

		return {
			enWord, ruWord,
			wordsRuAddingList, wordsEnAddingList,
			addEnWordToInput, addRuWordToInput,
			clearInput,
			deleteWordInAddingList,
			addWordToList,
			clearWordsList
		}
	}
};
</script>
