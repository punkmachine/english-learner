<template>
	<v-card>
		<v-table
			fixed-header
			fixed-footer
			:class="classTable"
			:height="heightTable"
		>
			<thead>
				<slot name="thead"></slot>
			</thead>

			<slot name="tbody"></slot>

			<tfoot>
				<slot name="tfoot"></slot>
			</tfoot>
		</v-table>
	</v-card>
</template>

<script>
export default {
	props: {
		classTable: {
			type: String,
			required: false,
			default: '',
		}
	},
	setup() {
		const heightTable = window.innerHeight - 65*2;

		return {
			heightTable
		}
	}
};
</script>