<template>
	<div id="" v-if="1">
		<h1>{{ TEXT }}</h1>
		<label for="1">{{ TEXT }}</label>
		<input type="checkbox" id="1" value="Déplacement professionnel" v-model="VAR">
		<br>
		<label for="2">{{ TEXT }}</label>
		<input type="checkbox" id="2" value="Visite à des proches" v-model="VAR">
		<br>
		<label for="3">{{ TEXT }}</label>
		<input type="checkbox" id="3" value="Vacances / Loisirs" v-model="VAR">
		<br>
		<label for="4">{{ TEXT }}</label>
		<input type="checkbox" id="4" value="logement occasionnel" v-model="VAR">
		<br>
		<label for="5">{{ TEXT }}</label>
		<input type="checkbox" id="5" value="Autre" v-model="VAR">
		<br>
		<input v-if="VAR.includes('Autre')" class="form-control" type="text" v-model="PECISION_VAR"
			placeholder="Precisions">
		<button v-if="VAR" @click="next" class="btn-next">Suivant</button>
		<button @click="back" class="btn-return">retour</button>
	</div>
</template>

<script>
const VAR = ref([]);
</script>