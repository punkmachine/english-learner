<template>
	<div class="test-page py-5 px-5">
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
</template>

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
}
</style>