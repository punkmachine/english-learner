<template>
	<div class="loader">
		<v-progress-circular
			color="#1E88E5"
			indeterminate
			:size="60"
			:width="5"
		/>
	</div>
</template>

<style lang="scss" scoped>
	.loader {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
	}
</style>