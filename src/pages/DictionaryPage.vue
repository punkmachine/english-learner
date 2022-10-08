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
							<td class="text-left">#</td>
							<td class="text-left">ru</td>
							<td class="text-left">en</td>
							<td class="text-left">actions</td>
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
						<v-text-field
							label="Введите слово и его синонимы на русском..."
						/>
						<v-text-field
							label="Введите слово и его синонимы на английском..."
						/>
					</v-card-text>
					<v-card-actions>
						<v-btn
							block
							class="el-btn el-text-white"
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
	setup(props) {
		const heightTable = window.innerHeight - 65*2;

		return {
			heightTable
		};
	},
}
</script>

<style lang="scss">
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