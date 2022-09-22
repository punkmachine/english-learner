<template>
	<div class="dictionary-page py-5 px-5">
		<div class="dictionary-page__col">
			<v-table
				fixed-header
				fixed-footer
				class="dictionary-page__table"
				:height="heightTable"
			>
				<thead>
					<tr>
						<th class="text-left">#</th>
						<th class="text-left">ru</th>
						<th class="text-left">en</th>
						<th
							class="text-left"
							width="60px"
						>
							actions
						</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="index of 20"
						:key="index"
						:class="{'dictionary-page__tr-bg': index % 2 !== 0}"
					>
						<td> {{ index }} </td>
						<td>слово, слово, слово</td>
						<td>слово, слово, слово</td>
						<td>
							<div class="dictionary-page__btn-group d-flex">
								<v-btn
									icon="mdi-pencil"
									color="blue darken-1"
									class="text-white"
									size="small"
								/>
								<v-btn
									icon="mdi-delete"
									color="blue darken-1"
									class="text-white"
									size="small"
								/>
							</div>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td class="text-left">#</td>
						<td class="text-left">ru</td>
						<td class="text-left">en</td>
						<td class="text-left">actions</td>
					</tr>
				</tfoot>
			</v-table>
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
						<v-text-field
							label="Введите слово на русском..."
						/>
						<v-text-field
							label="Введите слово на английском..."
						/>
					</v-card-text>
					<v-card-actions>
						<v-btn
							block
							class="el-btn text-white"
							prepend-icon="mdi-plus-box"
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
	computed: {
		heightTable() {
			return window.innerHeight - 65*2;
		},
	}
}
</script>

<style lang="scss" scoped>
.dictionary-page {
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 40px;

	&__tr-bg {
		background-color: #E7E9EB;
	}

	&__table {
		border: 1px solid #000;
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

.el-btn {
	background-color: #2196F3;
}
</style>