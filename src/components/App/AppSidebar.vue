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
				class="el-text-white"
				link
				to="/dictionary"
				:title="$t('layout.navigation.dictionary')"
			/>

			<v-list-item
				prepend-icon="mdi-chart-areaspline"
				class="el-text-white"
				link
				to="/statistics"
				:title="$t('layout.navigation.statistics')"
			/>

			<v-list-item
				prepend-icon="mdi-cards"
				class="el-text-white"
				link
				to="/cards"
				:title="$t('layout.navigation.cards')"
			/>

			<v-list-item
				prepend-icon="mdi-information"
				class="el-text-white"
				link
				to="/about"
				:title="$t('layout.navigation.about')"
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
					{{ $t('layout.startTest') }}
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
