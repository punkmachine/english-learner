<template>
	<v-navigation-drawer
		permanent
		width="250"
		color="dark"
	>
		<v-list
			density="compact"
			nav
		>
			<v-list-item
				prepend-icon="mdi-book-alphabet"
				title="Словарь"
				class="el-text-white"
				link
				to="/dictionary"
			/>

			<v-list-item
				prepend-icon="mdi-chart-areaspline"
				title="Статистика"
				class="el-text-white"
				link
				to="/statistics"
			/>

			<v-list-item
				prepend-icon="mdi-cards"
				class="el-text-white"
				link
				title="Карточки"
				to="/cards"
			/>

			<v-list-item
				prepend-icon="mdi-information"
				class="el-text-white"
				link
				title="О проекте"
				to="/about"
			/>
		</v-list>

		<template v-slot:append>
			<div class="pa-2">
				<v-btn
					block
					class="el-text-white"
					color="primary"
					to="/test"
				>
					Начать тест
				</v-btn>

				<v-divider />

				<div class="d-flex flex-column w-100">
					<div class="px-2 py-2 text-center w-100 el-text-white">
						{{ new Date().getFullYear() }} —
						<a
							href="https://github.com/punkmachine"
							target="_blank"
							class="el-link"
						>
							PunkMachine
						</a>
					</div>
				</div>
			</div>
		</template>
	</v-navigation-drawer>
</template>