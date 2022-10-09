<template>
	<div>
		<div
			v-if="isCreateTest"
			class="test-page__create"
		>
			<v-card
				min-width="350px"
			>
				<v-card-title class="py-2 px-4">Настройки теста</v-card-title>
				<v-divider />

				<v-card-text class="pa-4">
					<v-select
						v-model="countWordsInTest"
						:items="[10, 20, 25, 50, 100]"
						label="Выберите количество слов в тесте"
					/>
					<v-select
						v-model="modeTest"
						:items="['Вперемешку', 'С русского на английский', 'С английского на русский']"
						label="Выберите режим перевода"
					/>
				</v-card-text>

				<v-card-actions>
					<v-btn
						class="el-btn el-text-white w-50"
						block
						append-icon="mdi-arrow-right"
					>
						Старт
					</v-btn>
				</v-card-actions>
			</v-card>
		</div>
		<div
			v-else
			class="test-page py-5 px-5"
		>
			<div class="test-page__col">
				<v-card>
					<v-card-title>Переведите слово: well</v-card-title>
					<v-card-text>
						<v-text-field
							label="Слово на русском..."
						/>
					</v-card-text>
					<v-card-actions class="d-flex justify-space-between">
						<v-btn
							class="el-btn el-text-white"
							prepend-icon="mdi-arrow-left-bold"
						>
							Пред.
						</v-btn>
						<v-btn
							class="el-btn el-text-white"
							append-icon="mdi-arrow-right-bold"
						>
							След.
						</v-btn>
					</v-card-actions>
				</v-card>
			</div>
			<div class="test-page__col">
				<div class="test-page__cards">
					<v-card class="py-3 px-3">
						<v-card-title class="d-flex align-center gap-10">
							<span class="statistics-page__cards-title">0/30</span>
						</v-card-title>
						<v-card-text>Пройдено</v-card-text>
					</v-card>
					<v-card class="py-3 px-3">
						<v-card-title class="d-flex align-center gap-10">
							<span class="statistics-page__cards-title">0%</span>
						</v-card-title>
						<v-card-text>Пройдено</v-card-text>
					</v-card>
					<v-card class="py-3 px-3">
						<v-card-title class="d-flex align-center gap-10">
							<span class="statistics-page__cards-title">10:03 минут</span>
						</v-card-title>
						<v-card-text>Времени затрачено</v-card-text>
					</v-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup(props, context) {
		const isCreateTest = ref(true);
		const modeTest = ref('С английского на русский');
		const countWordsInTest = ref(25);

		return {
			isCreateTest,
			modeTest,
			countWordsInTest
		}
	},
}
</script>

<style lang="scss" scoped>
.test-page {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 50px;

	&__cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		gap: 35px;

		&-title {
			font-size: 1.65rem;
		}
	}

	&__create {
		display: flex;
		justify-content: center;
		align-items: center;
		height: calc(100vh - 64px);
	}
}
</style>