<template>
	<v-navigation-drawer
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
</template>