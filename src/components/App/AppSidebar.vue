<template>
	<v-navigation-drawer
		permanent
		width="250"
		color="#3F3F3F"
	>
		<v-list
			density="compact"
			nav
		>
			<v-list-item
				prepend-icon="mdi-book-alphabet"
				title="Словарь"
				class="text-white"
				link
				to="/dictionary"
			/>

			<v-list-item
				prepend-icon="mdi-chart-areaspline"
				title="Статистика"
				class="text-white"
				link
				to="/statistics"
			/>

			<v-list-item
				prepend-icon="mdi-information"
				class="text-white"
				link
				title="О проекте"
			/>
		</v-list>

		<template v-slot:append>
			<div class="pa-2">
				<v-btn
					block
					class="text-white"
					color="blue darken-1"
					to="/test"
				>
					Начать тест
				</v-btn>

				<v-divider />

				<div class="d-flex flex-column w-100">
					<div class="px-2 py-2 text-center w-100 text-white">
						{{ new Date().getFullYear() }} —
						<a
							href="https://github.com/punkmachine"
							target="_blank"
							class="link"
						>
							PunkMachine
						</a>
					</div>
				</div>
			</div>
		</template>
	</v-navigation-drawer>
</template>

<style lang="scss" scoped>
.link {
	color: #1E88E5 !important;
}
</style>