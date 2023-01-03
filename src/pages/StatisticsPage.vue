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
							<th>#</th>
							<th>date</th>
							<th>result</th>
						</tr>
					</thead>
					<tbody>
						<tr
							v-for="index of 20"
							:key="index"
							:class="{'statistics-page__tr-bg': index % 2 !== 0}"
						>
							<td>{{ index }}</td>
							<td>10.10.10</td>
							<td>20/30</td>
						</tr>
					</tbody>
					<tfoot>
						<tr>
							<th>#</th>
							<th>date</th>
							<th>result</th>
						</tr>
					</tfoot>
				</v-table>
			</v-card>
		</div>
		<div class="statistics-page__col">
			<div class="statistics-page__cards">
				<v-card class="py-3 px-3">
					<v-card-title class="d-flex align-center gap-2">
						<v-icon color="#D81B60">mdi-test-tube</v-icon>
						<span class="statistics-page__cards-title">20</span>
					</v-card-title>
					<v-divider />
					<v-card-text>Пройденных тестов</v-card-text>
				</v-card>
				<v-card class="py-3 px-3">
					<v-card-title class="d-flex align-center gap-2">
						<v-icon color="#43A047">mdi-check-circle</v-icon>
						<span class="statistics-page__cards-title">60%</span>
					</v-card-title>
					<v-divider />
					<v-card-text>Правильных ответов</v-card-text>
				</v-card>
				<v-card class="py-3 px-3">
					<v-card-title class="d-flex align-center gap-2">
						<v-icon color="#FDD835">mdi-arrow-top-right</v-icon>
						<span class="statistics-page__cards-title">+10%</span>
					</v-card-title>
					<v-divider />
					<v-card-text>По сравнению c прошлой неделей</v-card-text>
				</v-card>
				<v-card class="py-3 px-3">
					<v-card-title class="d-flex align-center gap-2">
						<v-icon color="#E53935">mdi-star</v-icon>
						<span class="statistics-page__cards-title">3</span>
					</v-card-title>
					<v-divider />
					<v-card-text>Оценка успеваемости</v-card-text>
				</v-card>
			</div>
			<div class="statistics-page__chart mt-5">
				<v-card class="py-3 px-3">
					<LineChart
						:chart-options="chartOptions"
						:chart-data="chartData"
						chart-id="line-chart"
						dataset-id-key="label"
					/>
				</v-card>
			</div>
		</div>
	</div>
</template>

<script>
import { Line } from 'vue-chartjs';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement
} from 'chart.js';

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	LineElement,
	LinearScale,
	CategoryScale,
	PointElement
);

export default {
	components: {
		LineChart: Line,
	},
	setup() {
		const chartOptions = {
			responsive: true,
			maintainAspectRatio: false
		};
		const chartData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'Data One',
					backgroundColor: '#f87979',
					data: [40, 39, 10, 40, 39, 80, 40]
				}
			]
		};
		const heightTable = window.innerHeight - 65*2;

		return {
			chartOptions,
			chartData,
			heightTable
		}
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

		&-title {
			font-size: 1.65rem;
		}
	}
}
</style>
