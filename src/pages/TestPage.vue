<template>
	<div class="test-page">
		<div
			v-if="isCreateTest"
			class="test-page__create"
		>
			<v-card min-width="350px">
				<v-card-title class="py-2 px-4">Настройки теста</v-card-title>
				<v-divider />

				<v-card-text class="pa-4">
					<v-select
						v-model="countWordsInTest"
						:items="[3, 10, 20, 25, 50, 100]"
						label="Выберите количество слов в тесте"
					/>
					<v-select
						v-model="modeTest"
						:items="modeTestItems"
						item-title="label"
						item-value="id"
						label="Выберите режим перевода"
					/>
				</v-card-text>

				<v-card-actions>
					<v-btn
						color="primary"
						@click="startTest"
						class="el-text-white w-50"
						block
						append-icon="mdi-arrow-right"
					>
						Старт
					</v-btn>
				</v-card-actions>
			</v-card>
		</div>

		<div
			v-else-if="!isFinishTest"
			class="test-page__test py-5 px-5"
		>
			<div class="test-page__col">
				<v-card>
					<v-card-title>Переведите слово: {{ getWord() }} </v-card-title>
					<v-card-text>
						<v-text-field
							v-model.trim="currentWord"
							@keypress.enter="currentWordIndex < countWordsInTest - 1 ? nextWord() : doneTest()"
							label="Слово на русском..."
						/>
					</v-card-text>
					<v-card-actions class="d-flex justify-space-between">
						<v-btn
							class="el-text-white"
							prepend-icon="mdi-arrow-left-bold"
							color="primary"
							:disabled="currentWordIndex === 0"
						>
							Пред.
						</v-btn>

						<v-btn
							v-if="currentWordIndex < countWordsInTest - 1"
							@click="nextWord"
							:disabled="!currentWord"
							color="primary"
							class="el-text-white"
							append-icon="mdi-arrow-right-bold"
						>
							След.
						</v-btn>

						<v-btn
							v-else
							@click="doneTest"
							:disabled="!currentWord"
							color="primary"
							class="el-text-white"
							append-icon="mdi-check"
						>
							Готово
						</v-btn>
					</v-card-actions>
				</v-card>
			</div>
			<div class="test-page__col">
				<div class="test-page__cards">
					<v-card class="py-3 px-3">
						<v-card-title class="d-flex align-center gap-2">
							<span class="statistics-page__cards-title"> {{ currentWordIndex }}/{{ countWordsInTest }} </span>
						</v-card-title>
						<v-card-text>Пройдено</v-card-text>
					</v-card>
					<v-card class="py-3 px-3">
						<v-card-title class="d-flex align-center gap-2">
							<span class="statistics-page__cards-title">0%</span>
						</v-card-title>
						<v-card-text>Пройдено</v-card-text>
					</v-card>
					<v-card class="py-3 px-3">
						<v-card-title class="d-flex align-center gap-2">
							<span class="statistics-page__cards-title">10:03 минут</span>
						</v-card-title>
						<v-card-text>Времени затрачено</v-card-text>
					</v-card>
				</div>
			</div>
		</div>

		<div
			v-else
			class="test-page__result"
		>
			<!-- Табличка ваши ответы - правильные ответы -->
			<!-- Карточки: времени затрачено, в среднем времени на ответ, как это повлияло на статистику, правильных ответов из скольки -->
		</div>
	</div>
</template>

<script>
import { ref, inject } from 'vue';

export default {
	setup() {
		const axios = inject('axios');

		const modeTestItems = [
			{ id: 1, label: 'Вперемешку' },
			{ id: 2, label: 'С английского на русский' },
			{ id: 3, label: 'С русского на английский' },
		];

		const isCreateTest = ref(false);
		const modeTest = ref(2);
		const countWordsInTest = ref(3);
		const isFinishTest = ref(true);

		const testData = ref([]);
		// TODO: loader
		const loading = ref(false);

		const currentWord = ref('');
		const currentWordIndex = ref(0);

		// eslint-disable-next-line prefer-const
		let requestTest = [];

		function startTest() {
			loading.value = true;

			// TODO: нормальный catch
			axios
				.get(`${process.env.VUE_APP_API_URL}/get-test?wordsAmount=${countWordsInTest.value}`)
				.then((response) => {
					testData.value = [ ...response.data ];
					isCreateTest.value = false;
				});

			loading.value = false;
		}

		function getWord() {
			if (modeTest.value === 2) {
				return testData.value[currentWordIndex.value]['word_variants_en'][0];
			} else if (modeTest.value === 1) {
				return testData.value[currentWordIndex.value]['word_variants_ru'][0];
			} else {
				const random = Math.floor(Math.random()*2 + 1) - 1;

				if (random === 1) {
					return testData.value[currentWordIndex.value]['word_variants_en'][0];
				} else {
					return testData.value[currentWordIndex.value]['word_variants_ru'][0];
				}
			}
		}

		function nextWord() {
			requestTest.push(currentWord.value);
			currentWord.value = '';

			if (currentWordIndex.value < testData.value.length - 1) {
				currentWordIndex.value++;
			}
		}

		function doneTest() {
			isFinishTest.value = true;
			// Отправка данных.
			// Отрисовка данных в виде графика, чо каво.
		}

		return {
			isCreateTest,
			modeTest,
			countWordsInTest,
			loading,
			startTest,
			currentWord,
			currentWordIndex,
			testData,
			modeTestItems,
			getWord,
			nextWord,
			doneTest,
			isFinishTest,
		}
	},
}
</script>