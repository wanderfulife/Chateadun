<template>
	<div class="container">
		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="enqueteur" />
			<button v-if="enqueteur" @click="next" class="btn-next">Suivant</button>
		</div>

		<div v-if="level === 1">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>

		<div id="sexe" v-if="level === 2" class="form-group">
			<h1>Sexe de la personne interviewée</h1>
			<select v-model="SEXE" class="form-control">
				<option v-for="option in sexes" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="SEXE" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="zone" v-if="level === 3" class="form-group">
			<h1>Lieu de l'interview</h1>
			<select v-model="ZONE" class="form-control">
				<option v-for="option in zone" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="ZONE" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Qco0" v-if="level === 4" class="form-group">
			<h1>L'usager interviewé voyage en train ?</h1>
			<select v-model="Usager_train" class="form-control">
				<option v-for="option in usagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Usager_train" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo1" v-if="level === 5 && Usager_train === 'Usager'">
			<h1>Par rapport à votre voyage en train :</h1>
			<select v-model="Type_Usager" class="form-control">
				<option v-for="option in typeUsagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Type_Usager" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo4" v-if="level === 6">
			<h1>Quel est le motif de votre déplacement ?</h1>
			<select v-model="Motif" class="form-control">
				<option v-for="option in motif" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Motif === 'Autre'" class="form-control" type="text" v-model="Precision_Motif"
				placeholder="Precisions">
			<button v-if="Motif" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo5" v-if="level === 7">
			<h1>A quelle fréquence venez-vous dans cette gare?</h1>
			<select v-model="Frequence" class="form-control">
				<option v-for="option in frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Frequence" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo6" v-if="level === 8">
			<h1>Quels services souhaiteriez-vous trouver en gare ?</h1>
			<select v-model="Service" class="form-control">
				<option v-for="option in services" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Service === 'Autre'" class="form-control" type="text" v-model="Precision_Service"
				placeholder="Precisions">
			<button v-if="Service" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo7" v-if="level === 9">
			<h1>Quels magasins ou commerces souhaiteriez-vous trouver en gare</h1>
			<select v-model="Commerces" class="form-control">
				<option v-for="option in commerces" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Commerces === 'Autre' || Commerces === 'Proximité'" class="form-control" type="text"
				v-model="Precision_Commerces" placeholder="Precisions">
			<button v-if="Commerces" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo8" v-if="level === 10">
			<h1>Avez-vous d'autres attentes concernant la rénovation de la gare (exemples que peut donner l'enquêteur :
				places assises en gare, débouché à l'Est, lien urbain…) ?</h1>
			<input class="form-control" type="text" v-model="Attentes_Gare" placeholder="Precisions">
			<button v-if="Attentes_Gare" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo9" v-if="level === 11">
			<h1>Quelle est votre commune de résidence ?</h1>
			<div>
				<CommuneSelector v-model="Commune_residence" />
			</div>
			<div id="QCo9A" v-if="Commune_residence === 'CHATEAUDUN - 28088'">
				<!--v-if=" level===12 && Commune_residence==='Chateaudun' -->
				<h1>Précisez de quelle rue à Châteaudun ?</h1>
				<input class="form-control" type="text" v-model="Rue_résidence" placeholder="Precisions">
				<button v-if="Rue_résidence" @click="next" class="btn-next">Suivant</button>
			</div>
			<button v-if="Commune_residence != 'CHATEAUDUN - 28088'" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>



		<div id="QCo10" v-if="level === 12">
			<h1>Quelle est votre profession?</h1>
			<select v-model="CSP" class="form-control">
				<option v-for="option in csp" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="CSP" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCo11" v-if="level === 13">
			<h1>Quel est votre âge ?</h1>
			<input class=" form-control" type="text" v-model="Age" placeholder="Precisions">
			<button v-if="Age" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QNV1" v-if="level === 14">
			<h1>Quelle est la raison de votre présence en gare ?</h1>
			<select v-model="NV_MOTIF_PRESENCE" class="form-control">
				<option v-for="option in nv_motif_presence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="NV_MOTIF_PRESENCE === 'Autre'" class="form-control" type="text"
				v-model="Precision_NV_MOTIF_PRESENCE" placeholder="Precisions">
			<button v-if="NV_MOTIF_PRESENCE" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QNV1A" v-if="level === 15">
			<h1>Quelle ligne de bus ou de car venez-vous prendre en gare de Châteaudun ?</h1>
			<select v-model="NV_Bus_Car_Diffusion" class="form-control">
				<option v-for="option in nv_bus_car_diffusion" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="NV_Bus_Car_Diffusion === 'Autre'" class="form-control" type="text"
				v-model="Precision_NV_Bus_Car_Diffusion" placeholder="Precisions">
			<button v-if="NV_Bus_Car_Diffusion" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QNV1B" v-if="level === 16">
			<h1>Avec quelle ligne de bus ou de car êtes-vous arrivé en gare de Châteaudun ?</h1>
			<select v-model="NV_Bus_Car_Rabattement" class="form-control">
				<option v-for="option in nv_bus_car_rabattement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="NV_Bus_Car_Rabattement === 'Autre'" class="form-control" type="text"
				v-model="Precision_NV_Bus_Car_Rabattement" placeholder="Precisions">
			<button v-if="NV_Bus_Car_Rabattement" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QNV6" v-if="level === 17">
			<h1>Quels services souhaiteriez-vous trouver en gare ? (plusieurs choix possibles)</h1>
			<select v-model="NV_Service" class="form-control">
				<option v-for="option in nv_services" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="NV_Service === 'Autre'" class="form-control" type="text" v-model="Precision_NV_Service"
				placeholder="Precisions">
			<button v-if="NV_Service" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QCNV7" v-if="level === 18">
			<h1>Quels magasins ou commerces souhaiteriez-vous trouver en gare ? (plusieurs choix possibles)</h1>
			<select v-model="NV_Commerces" class="form-control">
				<option v-for="option in nv_commerces" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="NV_Commerces === 'Autre' || Commerces === 'Proximité'" class="form-control" type="text"
				v-model="Precision_NV_Commerces" placeholder="Precisions">
			<button v-if="NV_Commerces" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QNV8" v-if="level === 19">
			<h1>Avez-vous d'autres attentes concernant la rénovation de la gare (exemples que peut donner l'enquêteur :
				places assises en gare, débouché à l'Est, lien urbain…) ?</h1>
			<input class="form-control" type="text" v-model="NV_Attentes_Gare" placeholder="Precisions">
			<button v-if="NV_Attentes_Gare" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<!-- v-if="Type_Usager === 'Arrivant' -->
		<div id="QP1" v-if="level === 20">
			<h1>Quelle sera votre gare de destination? </h1>
			<GareSelector v-model="P_Gare_Destination" />
			<input id="Autre" class="form-control" type="text" v-model="P_Gare_Destination"
				placeholder="Gare Internationale">
			<button v-if="P_Gare_Destination" @click="next" class="btn-fin">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP2" v-if="level === 21">
			<h1>Comment êtes-vous arrivé(e) en gare de Châteaudun ?</h1>
			<select v-model="P_Intermodalite_rabattement" class="form-control">
				<option v-for="option in p_intermodalite_rabattement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="P_Intermodalite_rabattement === 'Autre'" class="form-control" type="text"
				v-model="Precision_P_Intermodalite_rabattement" placeholder="Precisions">
			<button v-if="P_Intermodalite_rabattement" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP2A" v-if="level === 22">
			<h1>Où est stationné le véhicule ?</h1>
			<select v-model="P_Detail_stationnement_rabattement" class="form-control">
				<option v-for="option in p_detail_stationnement_rabattement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="P_Detail_stationnement_rabattement === 'Autre'" class="form-control" type="text"
				v-model="Precision_P_Detail_stationnement_rabattement" placeholder="Precisions">
			<button v-if="P_Detail_stationnement_rabattement" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP2B" v-if="level === 23">
			<h1>Est-ce que la voiture qui vous a déposé est repartie ou s'est stationnée ?</h1>
			<select v-model="P_Detail_depose_rabattement" class="form-control">
				<option v-for="option in p_detail_depose_rabattement" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="P_Detail_depose_rabattement" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP2C" v-if="level === 24">
			<h1>Avec quelle ligne de bus ou de car ?</h1>
			<select v-model="P_Detail_Bus_Car" class="form-control">
				<option v-for="option in p_detail_bus_car" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="P_Detail_Bus_Car === 'Autre'" class="form-control" type="text"
				v-model="Precision_P_Detail_Bus_Car" placeholder="Precisions">
			<button v-if="P_Detail_Bus_Car" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP2D" v-if="level === 25">
			<h1>Où stationnez-vous votre vélo?</h1>
			<select v-model="P_Detail_velo" class="form-control">
				<option v-for="option in p_detail_velo" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="P_Detail_velo === 'Autre'" class="form-control" type="text" v-model="Precision_P_Detail_velo"
				placeholder="Precisions">
			<button v-if="P_Detail_velo" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP2E" v-if="level === 26">
			<h1>Où stationnez-vous votre trottinette?</h1>
			<select v-model="P_Detail_trottinette" class="form-control">
				<option v-for="option in p_detail_trottinette" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="P_Detail_trottinette === 'Autre'" class="form-control" type="text"
				v-model="Precision_P_Detail_trottinette" placeholder="Precisions">
			<button v-if="P_Detail_trottinette" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QP3" v-if="level === 27">
			<h1>Juste avant d'arriver en gare, êtes vous parti(e) de Châteaudun ou d'une autre commune ?</h1>
			<select v-model="P_Origine_commune" class="form-control">
				<option v-for="option in p_origine_commune" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div v-if="P_Origine_commune === 'Autre'">
				<CommuneSelector v-model="Précision_P_Origine_commune" />
			</div>
			<div id="QP3A" v-if="P_Origine_commune === 'Châteaudun'">
				<h1>Précisez de quelle rue à Châteaudun ?</h1>
				<input class="form-control" type="text" v-model="P_Origine_rue" placeholder="Precisions">
			</div>
			<button v-if="P_Origine_commune && P_Origine_rue || P_Origine_commune && Précision_P_Origine_commune"
				@click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QA1" v-if="level === 28">
			<h1>Quelle a été votre gare de départ ?</h1>
			<GareSelector v-model="A_Gare_Origine" />
			<input id="Autre" class="form-control" type="text" v-model="A_Gare_Origine"
				placeholder="Gare Internationale">
			<button v-if="A_Gare_Origine" @click="next" class="btn-fin">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="QA2" v-if="level === 29">
			<h1>Comment êtes-vous arrivé(e) en gare de Châteaudun ?</h1>
			<select v-model="A_Intermodalite_diffusion" class="form-control">
				<option v-for="option in a_intermodalite_diffusion" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="A_Intermodalite_diffusion === 'Autre'" class="form-control" type="text"
				v-model="Precision_A_Intermodalite_diffusion" placeholder="Precisions">
			<button v-if="A_Intermodalite_diffusion" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="level > 1">
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>
		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">
		<button class="btn-fin" @click="downloadData">download DATA</button>
	</div>



	<!--  
		<div v-if="Usager_train === 'Non-usager' && level === 4">
			<h1>Néanmoins à quelle fréquence allez-vous en gare de Sens ?</h1>
			<select v-model="NU_Frequence" class="form-control">
				<option v-for="option in nu_frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<div v-if="NU_Frequence === '1ière' || NU_Frequence === 'Jamais'">
				<button @click="submitSurvey" class="btn-fin">FINIR QUESTIONNAIRE</button>
			</div>
			<div
				v-else-if="NU_Frequence === 'Ts les jrs' || NU_Frequence === '1-2 / smn' || NU_Frequence === 'Plrs / mois' || NU_Frequence === '-1 / mois' || NU_Frequence === 'Ts les ans'">
				<h1>Lorsque vous allez en gare, utilisez-vous ce parking ?</h1>
				<select v-model="NU_Usage_parking" class="form-control">
					<option v-for="option in parking" :key="option.id" :value="option.output">
						{{ option.text }}
					</option>
				</select>
				<button @click="submitSurvey" class="btn-fin">FINIR QUESTIONNAIRE</button>
			</div>
			<button @click="back" class="btn-return">Retour</button>
		</div>

		<div v-if="Usager_train === 'Usager' && level === 4">
			<h1>Par rapport à votre venue en gare :</h1>
			<select v-model="Type_Usager" class="form-control">
				<option v-for="option in typeUsagers" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Type_Usager === 'Autre'" class="form-control" type="text" v-model="precision_Type_Usager"
				placeholder="Precisions">
			<button v-if="Type_Usager" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Partant' && level === 5">
			<h1>Quelle sera votre gare de destination? </h1>
			<GareSelector v-model="P_Gare_Destination" />
			<input id="autre" class="form-control" type="text" v-model="P_Gare_Destination"
				placeholder="Gare Internationale">
			<button v-if="P_Gare_Destination" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Partant' && level === 6">
			<h1>Combien de temps allez-vous rester stationner ?</h1>
			<input id="autre" class="form-control" type="text" v-model="P_Detail_CV_temps"
				placeholder="Réponse ouverte">
			<button v-if="P_Detail_CV_temps" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Arrivant' && level === 5">
			<h1>Quelle est votre gare d'origine? </h1>
			<GareSelector v-model="A_Gare_Origine" />
			<input id="autre" class="form-control" type="text" v-model="A_Gare_Origine"
				placeholder="Gare Internationale">
			<button v-if="A_Gare_Origine" @click="next" class="btn-fin">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div v-if="Type_Usager === 'Arrivant' && level === 6">
			<h1>Combien de temps etes-vous rester stationner ?</h1>
			<input id="autre" class="form-control" type="text" v-model="A_Detail_VC_temps"
				placeholder="Réponse ouverte">
			<button v-if="A_Detail_VC_temps" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div
			v-if="level === 7 || level === 5 && Type_Usager === 'Attendre' || level === 5 && Type_Usager === 'Accompagner'
				|| level === 5 && Type_Usager === 'Renseignement' || level === 5 && Type_Usager === 'Achat'
				|| level === 5 && Type_Usager === 'Travailler' || level === 5 && Type_Usager === 'Bus' || level === 5 && Type_Usager === 'Autre'">
			<h1>A quelle fréquence venez-vous dans cette gare?</h1>
			<select v-model="Frequence" class="form-control">
				<option v-for="option in frequence" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Frequence" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		last div download
		 v-if="level === 8 || level === 6 && Type_Usager === 'Attendre' || level === 6 && Type_Usager === 'Accompagner'
				|| level === 6 && Type_Usager === 'Renseignement' || level === 6 && Type_Usager === 'Achat'
				|| level === 6 && Type_Usager === 'Travailler' || level === 6 && Type_Usager === 'Bus' || level === 6 && Type_Usager === 'Autre'"
		 
				<h1>Quelle est votre commune de résidence ?</h1>
			<CommuneSelector v-model="Commune_residence" />
			-->
</template>

<script setup>
import { ref } from "vue";
import {
	sexes, zone, usagers, typeUsagers, motif, frequence, services, commerces, csp, nv_motif_presence,
	nv_bus_car_diffusion, nv_bus_car_rabattement, nv_services, nv_commerces,
	p_intermodalite_rabattement, p_detail_stationnement_rabattement,
	p_detail_depose_rabattement, p_detail_bus_car, p_detail_velo,
	p_detail_trottinette, p_origine_commune, a_intermodalite_diffusion,

} from "./reponses";
import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const surveyCollectionRef = collection(db, "Chateadun");
const level = ref(0);
const startDate = ref('');
const enqueteur = ref('');
const SEXE = ref('');
const ZONE = ref('');
const Usager_train = ref('');
const Type_Usager = ref('');
const Motif = ref('');
const Precision_Motif = ref('');
const Frequence = ref('');
const Service = ref('');
const Precision_Service = ref('');
const Commerces = ref('');
const Precision_Commerces = ref('');
const Attentes_Gare = ref('');
const NV_Attentes_Gare = ref('');
const Commune_residence = ref('');
const Rue_résidence = ref('');
const CSP = ref('');
const Age = ref('');
const NV_MOTIF_PRESENCE = ref('');
const Precision_NV_MOTIF_PRESENCE = ref('');
const NV_Bus_Car_Diffusion = ref('');
const Precision_NV_Bus_Car_Diffusion = ref('');
const NV_Bus_Car_Rabattement = ref('');
const Precision_NV_Bus_Car_Rabattement = ref('');
const NV_Service = ref('');
const Precision_NV_Service = ref('');
const NV_Commerces = ref('');
const Precision_NV_Commerces = ref('');
const P_Gare_Destination = ref('');
const P_Intermodalite_rabattement = ref('');
const Precision_P_Intermodalite_rabattement = ref('');
const P_Detail_stationnement_rabattement = ref('');
const Precision_P_Detail_stationnement_rabattement = ref('');
const P_Detail_depose_rabattement = ref('');
const P_Detail_Bus_Car = ref('');
const Precision_P_Detail_Bus_Car = ref('');
const P_Detail_velo = ref('');
const Precision_P_Detail_velo = ref('');
const P_Detail_trottinette = ref('');
const Precision_P_Detail_trottinette = ref('');
const P_Origine_commune = ref('');
const P_Origine_rue = ref('');
const Précision_P_Origine_commune = ref('');
const A_Gare_Origine = ref('');
const A_Intermodalite_diffusion = ref('');
const Precision_A_Intermodalite_diffusion = ref('');



const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;
	console.log(level.value)

}

const back = () => {
	level.value--;
}



const submitSurvey = async () => {
	level.value = 1;
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		SEXE: SEXE.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: enqueteur.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		ZONE: ZONE.value,
		Usager_train: Usager_train.value,
		Type_Usager: Type_Usager.value,
		Motif: Motif.value,
		Precision_Motif: Precision_Motif.value,
		Frequence: Frequence.value,
		Service: Service.value,
		Precision_Service: Precision_Service.value,
		Commerces: Commerces.value,
		Precision_Commerces: Precision_Commerces.value,
		Attentes_Gare: Attentes_Gare.value,
		Commune_residence: Commune_residence.value,
		Rue_résidence: Rue_résidence.value,
		CSP: CSP.value,
		Age: Age.value,
		NV_MOTIF_PRESENCE: NV_MOTIF_PRESENCE.value,
		Precision_NV_MOTIF_PRESENCE: Precision_NV_MOTIF_PRESENCE.value,
		NV_Bus_Car_Diffusion: NV_Bus_Car_Diffusion.value,
		Precision_NV_Bus_Car_Diffusion: Precision_NV_Bus_Car_Diffusion.value,
		NV_Bus_Car_Rabattement: NV_Bus_Car_Rabattement.value,
		Precision_NV_Bus_Car_Rabattement: Precision_NV_Bus_Car_Rabattement.value,
		NV_Service: NV_Service.value,
		Precision_NV_Service: Precision_NV_Service.value,
		NV_Commerces: NV_Commerces.value,
		Precision_NV_Commerces: Precision_NV_Commerces.value,
		NV_Attentes_Gare: NV_Attentes_Gare.value,
		P_Gare_Destination: P_Gare_Destination.value,
		P_Intermodalite_rabattement: P_Intermodalite_rabattement.value,
		Precision_P_Intermodalite_rabattement: Precision_P_Intermodalite_rabattement.value,
		P_Detail_stationnement_rabattement: P_Detail_stationnement_rabattement.value,
		Precision_P_Detail_stationnement_rabattement: Precision_P_Detail_stationnement_rabattement.value,
		P_Detail_depose_rabattement: P_Detail_depose_rabattement.value,
		P_Detail_Bus_Car: P_Detail_Bus_Car.value,
		Precision_P_Detail_Bus_Car: Precision_P_Detail_Bus_Car.value,
		P_Detail_velo: P_Detail_velo.value,
		Precision_P_Detail_velo: Precision_P_Detail_velo.value,
		P_Detail_trottinette: P_Detail_trottinette.value,
		Precision_P_Detail_trottinette: Precision_P_Detail_trottinette.value,
		P_Origine_commune: P_Origine_commune.value,
		P_Origine_rue: P_Origine_rue.value,
		Précision_P_Origine_commune: Précision_P_Origine_commune.value,
		A_Gare_Origine: A_Gare_Origine.value,
		A_Intermodalite_diffusion: A_Intermodalite_diffusion.value,
		Precision_A_Intermodalite_diffusion: Precision_A_Intermodalite_diffusion.value,

		


	});
	startDate.value = "";
	SEXE.value = "";
	ZONE.value = "";
	Usager_train.value = "";
	Type_Usager.value = "";
	Motif.value = "";
	Precision_Motif.value = "";
	Frequence.value = "";
	Service.value = "";
	Precision_Service.value = "";
	Commerces.value = "";
	Precision_Commerces.value = "";
	Attentes_Gare.value = "";
	Commune_residence.value = "";
	Rue_résidence.value = "";
	CSP.value = "";
	Age.value = "";
	NV_MOTIF_PRESENCE.value = "";
	Precision_NV_MOTIF_PRESENCE.value = "";
	NV_Bus_Car_Diffusion.value = "";
	Precision_NV_Bus_Car_Diffusion.value = "";
	NV_Bus_Car_Rabattement.value = "";
	Precision_NV_Bus_Car_Rabattement.value = "";
	NV_Service.value = "";
	Precision_NV_Service.value = "";
	NV_Commerces.value = "";
	Precision_NV_Commerces.value = "";
	NV_Attentes_Gare.value = "";
	P_Gare_Destination.value = "";
	P_Intermodalite_rabattement.value = "";
	Precision_P_Intermodalite_rabattement.value = "";
	P_Detail_stationnement_rabattement.value = "";
	Precision_P_Detail_stationnement_rabattement.value = "";
	P_Detail_depose_rabattement.value = "";
	P_Detail_Bus_Car.value = "";
	Precision_P_Detail_Bus_Car.value = "";
	P_Detail_velo.value = "";
	Precision_P_Detail_velo.value = "";
	P_Detail_trottinette.value = "";
	Precision_P_Detail_trottinette.value = "";
	P_Origine_commune.value = "";
	P_Origine_rue.value = "";
	Précision_P_Origine_commune.value = "";
	A_Gare_Origine.value = "";
	A_Intermodalite_diffusion.value = "";
	Precision_A_Intermodalite_diffusion.value = "";

	
	


};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			Enqueteur: "Enqueteur",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE: "HEURE",
			HEURE_FIN: "HEURE_FIN",
			SEXE: "SEXE",
			ZONE: "ZONE",
			Usager_train: "Usager_train",
			Type_Usager: "Type_Usager",
			Motif: "Motif",
			Precision_Motif: "Precision_Motif",
			Frequence: "Frequence",
			Service: "Service",
			Precision_Service: "Precision_Service",
			Commerces: "Commerces",
			Precision_Commerces: "Precision_Commerces",
			Attentes_Gare: "Attentes_Gare",
			Commune_residence: "Commune_residence",
			Rue_résidence: "Rue_résidence",
			CSP: "CSP",
			Age: "Age",
			NV_MOTIF_PRESENCE: "NV_MOTIF_PRESENCE",
			Precision_NV_MOTIF_PRESENCE: "Precision_NV_MOTIF_PRESENCE",
			NV_Bus_Car_Diffusion: "NV_Bus_Car_Diffusion",
			Precision_NV_Bus_Car_Diffusion: "Precision_NV_Bus_Car_Diffusion",
			NV_Bus_Car_Rabattement: "NV_Bus_Car_Rabattement",
			Precision_NV_Bus_Car_Rabattement: "Precision_NV_Bus_Car_Rabattement",
			NV_Service: "NV_Service",
			Precision_NV_Service: "Precision_NV_Service",
			NV_Commerces: "NV_Commerces",
			Precision_NV_Commerces: "Precision_NV_Commerces",
			NV_Attentes_Gare: "NV_Attentes_Gare",
			P_Gare_Destination: "P_Gare_Destination",
			P_Intermodalite_rabattement: "P_Intermodalite_rabattement",
			Precision_P_Intermodalite_rabattement: "Precision_P_Intermodalite_rabattement",
			P_Detail_stationnement_rabattement: "P_Detail_stationnement_rabattement",
			Precision_P_Detail_stationnement_rabattement: "Precision_P_Detail_stationnement_rabattement",
			P_Detail_depose_rabattement: "P_Detail_depose_rabattement",
			P_Detail_Bus_Car: "P_Detail_Bus_Car",
			Precision_P_Detail_Bus_Car: "Precision_P_Detail_Bus_Car",
			P_Detail_velo: "P_Detail_velo",
			Precision_P_Detail_velo: "Precision_P_Detail_velo",
			P_Detail_trottinette: "P_Detail_trottinette",
			Precision_P_Detail_trottinette: "Precision_P_Detail_trottinette",
			P_Origine_commune: "P_Origine_commune",
			P_Origine_rue: "P_Origine_rue",
			Précision_P_Origine_commune: "Précision_P_Origine_commune",
			A_Gare_Origine: "A_Gare_Origine",
			A_Intermodalite_diffusion: "A_Intermodalite_diffusion",
			Precision_A_Intermodalite_diffusion: "Precision_A_Intermodalite_diffusion",

		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				Enqueteur: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				SEXE: docData.SEXE || "",
				ZONE: docData.ZONE || "",
				Usager_train: docData.Usager_train || "",
				Type_Usager: docData.Type_Usager || "",
				Motif: docData.Motif || "",
				Precision_Motif: docData.Precision_Motif || "",
				Frequence: docData.Frequence || "",
				Service: docData.Service || "",
				Precision_Service: docData.Precision_Service || "",
				Commerces: docData.Commerces || "",
				Precision_Commerces: docData.Precision_Commerces || "",
				Attentes_Gare: docData.Attentes_Gare || "",
				Commune_residence: docData.Commune_residence || "",
				Rue_résidence: docData.Rue_résidence || "",
				CSP: docData.CSP || "",
				Age: docData.Age || "",
				NV_MOTIF_PRESENCE: docData.NV_MOTIF_PRESENCE || "",
				Precision_NV_MOTIF_PRESENCE: docData.Precision_NV_MOTIF_PRESENCE || "",
				NV_Bus_Car_Diffusion: docData.NV_Bus_Car_Diffusion || "",
				Precision_NV_Bus_Car_Diffusion: docData.Precision_NV_Bus_Car_Diffusion || "",
				NV_Bus_Car_Rabattement: docData.NV_Bus_Car_Rabattement || "",
				Precision_NV_Bus_Car_Rabattement: docData.Precision_NV_Bus_Car_Rabattement || "",
				NV_Service: docData.NV_Service || "",
				Precision_NV_Service: docData.Precision_NV_Service || "",
				NV_Commerces: docData.NV_Commerces || "",
				Precision_NV_Commerces: docData.Precision_NV_Commerces || "",
				NV_Attentes_Gare: docData.NV_Attentes_Gare || "",
				P_Gare_Destination: docData.P_Gare_Destination || "",
				P_Intermodalite_rabattement: docData.P_Intermodalite_rabattement || "",
				Precision_P_Intermodalite_rabattement: docData.Precision_P_Intermodalite_rabattement || "",
				P_Detail_stationnement_rabattement: docData.P_Detail_stationnement_rabattement || "",
				Precision_P_Detail_stationnement_rabattement: docData.Precision_P_Detail_stationnement_rabattement || "",
				P_Detail_depose_rabattement: docData.P_Detail_depose_rabattement || "",
				P_Detail_Bus_Car: docData.P_Detail_Bus_Car || "",
				Precision_P_Detail_Bus_Car: docData.Precision_P_Detail_Bus_Car || "",
				P_Detail_velo: docData.P_Detail_velo || "",
				Precision_P_Detail_velo: docData.Precision_P_Detail_velo || "",
				P_Detail_trottinette: docData.P_Detail_trottinette || "",
				Precision_P_Detail_trottinette: docData.Precision_P_Detail_trottinette || "",
				P_Origine_commune: docData.P_Origine_commune || "",
				P_Origine_rue: docData.P_Origine_rue || "",
				Précision_P_Origine_commune: docData.Précision_P_Origine_commune || "",
				A_Gare_Origine: docData.A_Gare_Origine || "",
				A_Intermodalite_diffusion: docData.A_Intermodalite_diffusion || "",
				Precision_A_Intermodalite_diffusion: docData.Precision_A_Intermodalite_diffusion || "",


			};
			data.push(mappedData);

			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});

		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});

		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));

		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "OdSens.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>
<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
}

h2 {
	color: white;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
<!-- <style>
body {
	background-color: #1e1e1e;
}

.container {
	background-color: #1e1e1e;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.btn-data {
	position: absolute;
	bottom: 0;
	left: 0;
	background-color: #4caf50;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
}

.btn-data:hover {
	background-color: #45a049;
}

h1 {
	text-align: center;
	color: #4caf50;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	padding: 10px !important;
	border-radius: 5px;
	border: 1px solid #333;
	background-color: #333;
	color: white;
	text-transform: uppercase;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

.form-control {
	width: 100%;
	padding: 10px !important;
	border-radius: 5px;
	border: 1px solid #333;
	background-color: #333;
	color: white;
	text-transform: uppercase;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style> -->