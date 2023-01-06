<template>
	<v-text-field clearable>
		<template #details>
			<!-- TODO: убрать паддинги -->
			<!-- TODO: сделать кнопку очистки -->
			<!-- TODO: выровнять chip слева -->
			<!-- TODO: удаление работает как-то странно -->
			<v-chip-group column>
				<Chip
					v-for="(word, index) in wordsList"
					:key="index"
					@click:close="clickDeleteWord(index)"
				>
					{{ word }}
				</Chip>
			</v-chip-group>
		</template>
	</v-text-field>
</template>

<script>
import Chip from '@/components/shared/Chip.vue';

export default {
	props: {
		wordsList: {
			type: Array,
			required: true,
		}
	},
	components: { Chip },
	setup(props, { emit }) {
		function clickDeleteWord(index) {
			emit('clickDeleteWord', index);
		}

		return {
			clickDeleteWord
		}
	},
}
</script>
