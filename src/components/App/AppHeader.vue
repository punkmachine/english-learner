<template>
	<div class="header w-100">
		<div class="d-flex justify-space-between">
			<v-list class="el-bg-ultra-dark">
				<v-list-item
					title="English Learner"
					link
					to="/"
					class="el-text-white"
					:prepend-avatar="'./img/logo.png'"
					:active="false"
				/>
			</v-list>

			<v-btn
				icon="mdi-account-circle"
				size="x-large"
				to="/profile"
				color="mainLightColor"
			/>
		</div>
	</div>
</template>