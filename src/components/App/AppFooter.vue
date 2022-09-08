<template>
	<div class="d-flex flex-column w-100">
		<div class="bg-teal d-flex w-100 align-center px-4">
			<strong class="text-white">Get connected with us on social networks!</strong>

			<v-spacer />

			<v-btn
				v-for="icon in icons"
				:key="icon"
				class="mx-4 text-white"
				:icon="icon"
				variant="plain"
				size="small"
			/>
		</div>

		<div class="px-4 py-2 bg-black text-white text-center w-100">
			{{ new Date().getFullYear() }} — <strong>Vuetify</strong>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppFooter',
	data: () => ({
		icons: [
			'mdi-facebook',
			'mdi-twitter',
			'mdi-linkedin',
			'mdi-instagram',
		],
	}),
}
</script>