<template>
	<transition name="fade">
		<v-alert
			:color="color"
			:icon="icon"
			closable
			max-height="65px"
			max-width="400px"
			position="fixed"
			class="el-alert"
		>
			{{ text }}
		</v-alert>
	</transition>
</template>

<script>
export default {
	props: {
		color: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
	},
};
</script>
