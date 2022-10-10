<template>
	<v-text-field clearable>
		<template #details>
			<!-- TODO: убрать паддинги -->
			<!-- TODO: сделать кнопку очистки -->
			<!-- TODO: выровнять chip слева -->
			<v-chip-group column>
				<v-chip
					v-for="(word, index) in wordsList"
					:key="index"
					@click:close="clickDeleteWord(index)"
					closable
					size="small"
				>
					{{ word }}
				</v-chip>
			</v-chip-group>
		</template>
	</v-text-field>
</template>

<script>
export default {
	props: {
		wordsList: {
			type: Array,
			required: true,
		}
	},
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