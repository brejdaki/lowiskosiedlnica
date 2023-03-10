<script lang="ts" setup>
import { Field } from 'vee-validate';

const species = [
	'Karp',
	'Lin',
	'Leszcz'
]
</script>

<template>
<Field 
	v-slot="{ value }"
	name="species"
	as="select" 
>
	<option 
		value="" 
		disabled
	>
		Wybierz gatunek
	</option>

	<option 
		v-for="item in species" 
		:key="item" 
		:value="item" 
		:selected="value && value.includes(item)"
	>	
		{{ item }}
	</option>
</Field>
</template>