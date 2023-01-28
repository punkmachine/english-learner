<template>
	<v-text-field clearable>
		<template #details>
			<!-- TODO: сделать кнопку очистки -->
			<!-- TODO: выровнять chip слева -->
			<!-- TODO: удаление работает как-то странно -->
			<div class="pa-0">
				<v-chip-group column>
					<Chip
						v-for="(word, index) in wordsList"
						:key="index"
						@click:close="clickDeleteWord(index)"
					>
						{{ word }}
					</Chip>
				</v-chip-group>
			</div>
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
