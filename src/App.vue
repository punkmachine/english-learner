<template>
	<v-app>
		<v-layout>
			<v-app-bar
				height="65"
				elevation="0"
				color="ultraDark"
			>
				<AppHeader />
			</v-app-bar>

			<AppSidebar />

			<v-main class="wrapper">
				<router-view />
			</v-main>
		</v-layout>
	</v-app>
</template>

<script>
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppHeader from '@/components/App/AppHeader.vue';

export default {
	name: 'App',
	components: {
		AppSidebar,
		AppHeader
	},
}
</script>

<style lang="scss">
@import '@/assets/main';
</style>
