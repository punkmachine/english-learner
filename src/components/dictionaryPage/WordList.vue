<template>
	<tbody>
		<!-- TODO: список отображать в lazy -->
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
						class="el-text-white"
						size="x-small"
						color="primary"
					/>
					<v-btn
						@click="deleteWord(word.id)"
						icon="mdi-delete"
						class="el-text-white"
						size="x-small"
						color="primary"
					/>
				</div>
			</td>
		</tr>
	</tbody>
</template>

<script>
export default {
	props: {
		wordList: {
			required: true,
			type: Array,
		}
	},
	setup(props, { emit }) {
		const editWordClick = (id) => emit('editWordClick', id);
		const deleteWord = (id) => emit('deleteWord', id);

		return {
			editWordClick, deleteWord
		}
	}
};
</script>