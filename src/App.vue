<template>
	<v-app>
		<v-layout>
			<v-app-bar
				theme="dark"
				height="65"
				elevation="0"
				:color="headerColor"
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
import { colors } from '@/utils/color';
import AppSidebar from '@/components/App/AppSidebar.vue';
import AppHeader from '@/components/App/AppHeader.vue';

export default {
	name: 'App',
	components: {
		AppSidebar,
		AppHeader
	},
	data() {
		return {
			headerColor: colors.ultraDark,
		}
	}
}
</script>

<style lang="scss">
@import '@/assets/main';
</style>