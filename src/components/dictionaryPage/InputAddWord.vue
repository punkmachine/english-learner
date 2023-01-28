<template>
	<v-text-field clearable>
		<template #details>
			<div class="pa-0">
				<v-chip-group column>
					<Chip
						v-for="(word, index) in wordsList"
						:key="index"
						@click:close="clickDeleteWord(index)"
					>
						{{ word }}
					</Chip>
					<v-btn
						v-show="wordsList.length"
						variant="plain"
						class="pr-1"
						@click="$emit('clearWordsList')"
					>
						<span class="text-black"> Очистить </span>
					</v-btn>
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
