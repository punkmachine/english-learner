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
				<Alert />
			</v-main>
		</v-layout>
	</v-app>
</template>

<script>
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppHeader from '@/components/App/AppHeader.vue';
import Alert from '@/components/shared/Alert.vue';

export default {
	name: 'App',
	components: {
		AppSidebar,
		AppHeader,
		Alert
	},
}
</script>

<style lang="scss">
@import '@/assets/main';
</style>
