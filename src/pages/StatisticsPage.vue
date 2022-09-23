<template>
	<div class="statistics-page py-5 px-5">
		<div class="statistics-page__col">
			<v-card>
				<v-table
					fixed-header
					fixed-footer
					class="statistics-page__table"
					:height="heightTable"
				>
					<thead>
						<tr>
							<th class="text-left">#</th>
							<th class="text-left">date</th>
							<th class="text-left">result</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="index of 20"
							:key="index"
							:class="{'statistics-page__tr-bg': index % 2 !== 0}"
						>
							<td> {{ index }} </td>
							<td>10.10.10</td>
							<td>20/30</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th class="text-left">#</th>
							<th class="text-left">date</th>
							<th class="text-left">result</th>
						</tr>
					</tfoot>
				</v-table>
			</v-card>
		</div>
		<div class="statistics-page__col">
			<div class="statistics-page__cards">
				<v-card class="py-3 px-3">
					<v-card-title>
						<v-icon>mdi-test-tube</v-icon>
						20
					</v-card-title>
					<v-divider />
					<v-card-text>Пройденных тестов</v-card-text>
				</v-card>
				<v-card class="py-3 px-3">
					<v-card-title>
						<v-icon>mdi-check-circle</v-icon>
						60%
					</v-card-title>
					<v-divider />
					<v-card-text>Правильных ответов</v-card-text>
				</v-card>
				<v-card class="py-3 px-3">
					<v-card-title>
						<v-icon>mdi-arrow-top-right</v-icon>
						+10%
					</v-card-title>
					<v-divider />
					<v-card-text>По сравнению с прошлой неделей</v-card-text>
				</v-card>
				<v-card class="py-3 px-3">
					<v-card-title>
						<v-icon>mdi-star</v-icon>
						3
					</v-card-title>
					<v-divider />
					<v-card-text>Оценка успеваемости</v-card-text>
				</v-card>
			</div>
			<!-- 1 колонка -->
			<!-- график https://codesandbox.io/s/github/apertureless/vue-chartjs/tree/main/sandboxes/line -->
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		heightTable() {
			return window.innerHeight - 65*2;
		},
	}
}
</script>

<style lang="scss">
.statistics-page {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 40px;

	&__tr-bg {
		background-color: #f5f5f5;

		&:hover {
			background-color: #fff !important;
		}
	}

	&__cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: auto;
		gap: 40px;
	}
}
</style>