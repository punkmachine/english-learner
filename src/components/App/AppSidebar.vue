<template>
	<v-navigation-drawer
		theme="dark"
		permanent
		width="250"
	>
		<!-- TODO: Надо исправить выделение активным классом при клике -->
		<v-list>
			<v-list-item
				:prepend-avatar="'./img/logo.png'"
				title="English Learner"
				link
				to="/"
			/>
		</v-list>

		<v-divider />

		<!-- TODO: Надо исправить выделение активным классом при клике на другой роут. -->
		<v-list
			density="compact"
			nav
		>
			<v-list-item
				prepend-icon="mdi-book-alphabet"
				title="Словарь"
				link
				to="/dictionary"
			/>

			<v-list-item
				prepend-icon="mdi-chart-areaspline"
				title="Статистика"
				link
				to="/statistics"
			/>

			<v-list-item
				prepend-icon="mdi-information"
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
					<div class="px-2 py-2 text-center w-100">
						{{ new Date().getFullYear() }} —
						<a
							href="https://github.com/punkmachine"
							target="_blank"
						>
							PunkMachine
						</a>
					</div>
				</div>
			</div>
		</template>
	</v-navigation-drawer>
</template>