<template>
	<v-app>
		<v-layout>
			<v-app-bar
				theme="dark"
				height="65"
				elevation="0"
				color="#2B2B2B"
			>
				<AppHeader />
			</v-app-bar>

			<AppSidebar />

			<v-main>
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