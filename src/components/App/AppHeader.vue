<template>
	<div class="header w-100">
		<div class="d-flex justify-space-between">
			<v-list class="el-bg-ultra-dark">
				<v-list-item
					title="English Learner"
					link
					to="/"
					class="el-text-white"
					prepend-avatar="./img/logo.png"
					:active="false"
				/>
			</v-list>

			<div class="d-flex justify-space-between align-center">
				<v-btn
					color="mainLightColor"
					class="px-2"
					@click="toggleLanguage"
				>
					<span class="d-flex gap-1 align-center">
						<v-icon icon="mdi-web" />
						<span> {{ currentLang }} </span>
					</span>
				</v-btn>
				<v-btn
					icon="mdi-account-circle"
					size="x-large"
					to="/profile"
					color="mainLightColor"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';

export default {
	setup() {
		const store = useStore();
		const { locale } = useI18n({ useScope: 'global' });

		const currentLang = computed(() => {
			return store.getters.getLanguage;
		});

		function toggleLanguage() {
			const newLang = currentLang.value === 'en' ? 'ru' : 'en';

			store.dispatch('changeLanguage', newLang);
			locale.value = newLang;
		}

		return {
			currentLang,
			toggleLanguage
		}
	},
}
</script>