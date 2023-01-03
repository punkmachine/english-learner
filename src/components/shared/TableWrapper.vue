<template>
	<v-card :height="heightTable">
		<Loader v-if="loading" />

		<v-table
			v-else
			fixed-header
			fixed-footer
			:class="classTable"
			:height="heightTable"
		>
			<thead>
				<slot name="thead" />
			</thead>

			<slot name="tbody" />

			<tfoot>
				<slot name="tfoot" />
			</tfoot>
		</v-table>
	</v-card>
</template>

<script>
import Loader from '@/components/shared/Loader.vue';

export default {
	props: {
		classTable: {
			type: String,
			required: false,
			default: '',
		},
		loading: {
			type: Boolean,
			required: true,
		}
	},
	components: {
		Loader
	},
	setup() {
		const heightTable = window.innerHeight - 65*2;

		return {
			heightTable
		}
	}
};
</script>
