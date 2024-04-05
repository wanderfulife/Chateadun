<template>

	<!-- v-if="level === 11" -->
	<div id="">
		<h1>TEXT</h1>
		<div>
			<CommuneSelector v-model="VAR" />
		</div>
		<button v-if="VAR" @click="next" class="btn-next">Suivant</button>
		<button @click="back" class="btn-return">retour</button>
	</div>

	<div id="" v-if="Commune_residence === 'CHATEAUDUN - 28088'">
		<!--v-if=" level===12 && Commune_residence==='Chateaudun' -->
		<h1>Précisez de quelle rue à Châteaudun ?</h1>
		<input class="form-control" type="text" v-model="VAR2" placeholder="Precisions">
		<button v-if="VAR" @click="next" class="btn-next">Suivant</button>
		<button @click="back" class="btn-return">retour</button>
	</div>
</template>

<script>
</script>