<template>
	<div class="header">
		<div class="header__wrapper">
			<v-list class="header__logo">
				<v-list-item
					:prepend-avatar="'./img/logo.png'"
					title="English Learner"
					link
					:active="false"
					to="/"
				/>
			</v-list>

			<v-btn
				icon="mdi-account-circle"
				size="x-large"
				class="text-white"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header {
		width: 100%;

		&__wrapper {
			display: flex;
			justify-content: space-between;
		}

		&__logo {
			background-color: #2B2B2B;
		}
	}
</style>