<template>
	<transition name="fade">
		<v-alert
			v-if="visibleAlert"
			max-height="65px"
			max-width="400px"
			position="fixed"
			class="el-alert"
			:type="type"
		>
			{{ text }}
		</v-alert>
	</transition>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
	setup() {
		const store = useStore();

		const visibleAlert = computed(() => {
			return store.getters.getVisibleAlert;
		});

		const text = computed(() => {
			return store.getters.getAlertText;
		});

		const type = computed(() => {
			return store.getters.getAlertType;
		});

		return {
			visibleAlert,
			text,
			type
		}
	}
};
</script>
