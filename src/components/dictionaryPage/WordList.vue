<template>
	<tr
		v-for="(word, index) in wordList"
		:key="word.id"
		:class="{'dictionary-page__tr-bg': index % 2 === 0}"
	>
		<td> {{ index + 1 }} </td>
		<!-- TODO: сделать слова с больших букв -->
		<td> {{ word['word_variants_ru'].join(', ') }} </td>
		<td> {{ word['word_variants_en'].join(', ') }} </td>
		<td>
			<div class="dictionary-page__btn-group d-flex">
				<v-btn
					@click="editWordClick(word.id)"
					icon="mdi-pencil"
					class="el-btn el-text-white"
					size="x-small"
				/>
				<v-btn
					@click="deleteWord(word.id)"
					icon="mdi-delete"
					class="el-btn el-text-white"
					size="x-small"
				/>
			</div>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		wordList: {
			type: Array,
			required: true,
		}
	},
	setup(props, { emit }) {
		const editWordClick = (id) => emit('editWordClick', id);
		const deleteWord = (id) => emit('deleteWord', id)

		return {
			editWordClick, deleteWord
		}
	},
}
</script>