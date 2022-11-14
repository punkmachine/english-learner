<template>
	<div class="header w-100">
		<div class="d-flex justify-space-between">
			<v-list class="el-bg-ultra-dark">
				<v-list-item
					:prepend-avatar="'./img/logo.png'"
					title="English Learner"
					link
					:active="false"
					to="/"
				/>
			</v-list>

			<v-btn
				icon="mdi-account-circle"
				size="x-large"
				to="/profile"
				:color="btnColor"
			/>
		</div>
	</div>
</template>

<script>
import { colors } from '@/utils/color';

export default {
	data() {
		return {
			btnColor: colors.mainLightColor,
		}
	}
}
</script>