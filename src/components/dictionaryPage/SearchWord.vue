<template>
	<v-card>
		<v-card-title>{{ $t('shared.search') }}</v-card-title>
		<v-card-text>
			<v-text-field
				:label="`${$t('shared.search')}...`"
				append-inner-icon="mdi-magnify"
			/>
		</v-card-text>
	</v-card>
</template>
