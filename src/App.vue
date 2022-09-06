<template>
	<v-app>
		<v-layout>
			<v-navigation-drawer
				class="bg-deep-purple"
				theme="dark"
				permanent
				width="250"
			>
				<v-list>
					<v-list-item
						prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
						title="Sandra Adams"
						subtitle="sandra_a88@gmailcom"
					/>
				</v-list>

				<v-divider />

				<v-list
					density="compact"
					nav
					color="transparent"
				>
					<v-list-item
						prepend-icon="mdi-folder"
						title="My Files"
						value="myfiles"
					/>

					<v-list-item
						prepend-icon="mdi-account-multiple"
						title="Shared with me"
						value="shared"
					/>

					<v-list-item
						prepend-icon="mdi-star"
						title="Starred"
						value="starred"
					/>
				</v-list>

				<template v-slot:append>
					<div class="pa-2">
						<v-btn block>
							Logout
						</v-btn>
					</div>
				</template>
			</v-navigation-drawer>

			<v-app-bar
				color="teal-darken-4"
				height="60"
				elevation="0"
			>
				<div class="header">
					<v-btn icon>
						<v-icon>mdi-magnify</v-icon>
					</v-btn>

					<v-btn icon>
						<v-icon>mdi-heart</v-icon>
					</v-btn>

					<v-btn icon>
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</div>
			</v-app-bar>

			<v-app-bar
				location="bottom"
				height="80"
				elevation="0"
			>
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
			</v-app-bar>

			<v-main>
				<router-view />
			</v-main>

		</v-layout>
	</v-app>
</template>

<script>
import SidebarLayout from '@/layouts/SidebarLayout.vue';
import FooterLayout from '@/layouts/FooterLayout.vue';

export default {
	name: 'App',
	components: {
		SidebarLayout,
		FooterLayout
	},
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

<style scoped>
	.header {
		width: 100%;
		display: flex;
		justify-content: flex-end;
	}
</style>