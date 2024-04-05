const sexes = [
	{
		id: 1,
		output: "H",
		text: "Homme",
	},
	{
		id: 2,
		output: "F",
		text: "Femme",
	},
];

const zone = [
	{
		id: 1,
		output: "PARVIS",
		text: "PARVIS",
	},
	{
		id: 2,
		output: "BV",
		text: "BV",
	},
	{
		id: 3,
		output: "QUAIS",
		text: "QUAIS",
	},
];

const usagers = [
	{
		id: 1,
		output: "Usager",
		text: "Oui",
	},
	{
		id: 2,
		output: "Non-usager",
		text: "Non",
	},
];

const typeUsagers = [
	{
		id: 1,
		output: "Correspondant",
		text: "Vous êtes en correspondance train-train",
	},
	{
		id: 2,
		output: "Partant",
		text: "Vous allez prendre un train",
	},
	{
		id: 3,
		output: "Arrivant",
		text: "Vous êtes descendu d'un train",
	},
];

const motif = [
	{ id: 1, output: "travail", text: "travail" },
	{ id: 2, output: "Professionnel", text: "Professionnel" },
	{ id: 3, output: "Loisir", text: "Loisir" },
	{ id: 4, output: "Etude", text: "Etude" },
	{ id: 5, output: "Demarche", text: "Demarche" },
	{ id: 6, output: "Autre", text: "Autre" },
];

const services = [
	{ id: 1, output: "Sanitaires", text: "Des sanitaires" },
	{
		id: 2,
		output: "Vélos",
		text: "Un atelier de réparation et/ou de location vélos",
	},
	{ id: 3, output: "Santé", text: "Un centre de santé" },
	{
		id: 4,
		output: "Tourisme",
		text: "Une antenne de l'office du tourisme",
	},
	{ id: 5, output: "Photomaton", text: "Un Photomaton" },
	{ id: 6, output: "Autre", text: "Autres --> précisez" },
];
const commerces = [
	{ id: 1, output: "Café", text: "Un café" },
	{ id: 2, output: "Presse", text: "Vente de presse" },
	{ id: 3, output: "Supérette", text: "Une supérette" },
	{
		id: 4,
		output: "Distributeur",
		text: "Un distributeur de boissons/nourriture",
	},
	{ id: 5, output: "Proximité", text: "Un commerce de proximité --> précisez" },
	{ id: 6, output: "Autre", text: "Autres --> précisez" },
];

const frequence = [
	{
		id: 1,
		output: "Ts les jrs",
		text: "Tous les jours de la semaine ou presque",
	},
	{ id: 2, output: "1-2 / smn", text: "1 à 2 fois par semaine" },
	{ id: 3, output: "Plrs / mois", text: "1 ou plusieurs fois par mois" },
	{ id: 4, output: "-1 / mois", text: "Moins d'une fois par mois" },
	{ id: 5, output: "Ts les ans", text: "Tous les ans" },
	{ id: 6, output: "1ière", text: "C'est la première fois" },
];

const csp = [
	{
		id: 1,
		output: "Cadre",
		text: "Cadre, Profession libérale ou intellectuelle, Chef d'entreprise > 10 salariés",
	},
	{ id: 2, output: "Ouvrier", text: "Ouvrier, Employé" },
	{ id: 3, output: "Technicien", text: "Technicien, Agent de maîtrise" },
	{
		id: 4,
		output: "Artisan",
		text: "Artisan, Commerçant, Chef d'entreprise TPE",
	},
	{ id: 5, output: "Enseignant", text: "Enseignant, Professeur" },
	{ id: 6, output: "Militaire", text: "Militaire" },
	{ id: 7, output: "Agriculteur", text: "Agriculteur, Exploitant agricole" },
	{ id: 8, output: "Etudiant", text: "Etudiant (après le bac)" },
	{ id: 9, output: "Scolaire", text: "Scolaire (avant le bac)" },
	{ id: 10, output: "Retraité", text: "Retraité" },
	{ id: 11, output: "Sans emploi", text: "Sans emploi" },
	{ id: 12, output: "Autre", text: "Autre" },
];

const nv_motif_presence = [
	{ id: 1, output: "Partant-Bus", text: "Vous venez prendre un bus ou car" },
	{ id: 2, output: "Arrivant-Bus", text: "Vous êtes descendu d'un bus ou car" },
	{ id: 3, output: "Attendre", text: "Vous venez attendre quelqu'un" },
	{ id: 4, output: "Accompagner", text: "Vous venez accompagner quelqu'un" },
	{ id: 5, output: "Autre", text: "Autre -> précisez :" },
];

const nv_bus_car_diffusion = [
	{ id: 1, output: "B1", text: "C'Bus 1" },
	{ id: 2, output: "B2", text: "C'Bus 2" },
	{ id: 3, output: "B3", text: "C'Bus 3" },
	{ id: 4, output: "C3", text: "Car REMI 3" },
	{ id: 5, output: "C3A", text: "Car REMI 3A" },
	{ id: 6, output: "C9", text: "Car REMI 9" },
	{ id: 7, output: "C9A", text: "Car REMI 9A" },
	{ id: 8, output: "C32A", text: "Car REMI 32A" },
	{ id: 9, output: "C32B", text: "Car REMI 32B" },
	{ id: 10, output: "C434", text: "Car REMI 434" },
	{ id: 10, output: "Autre", text: "Autre - précisez" },
];
const nv_bus_car_rabattement = [
	{ id: 1, output: "B1", text: "C'Bus 1" },
	{ id: 2, output: "B2", text: "C'Bus 2" },
	{ id: 3, output: "B3", text: "C'Bus 3" },
	{ id: 4, output: "C3", text: "Car REMI 3" },
	{ id: 5, output: "C3A", text: "Car REMI 3A" },
	{ id: 6, output: "C9", text: "Car REMI 9" },
	{ id: 7, output: "C9A", text: "Car REMI 9A" },
	{ id: 8, output: "C32A", text: "Car REMI 32A" },
	{ id: 9, output: "C32B", text: "Car REMI 32B" },
	{ id: 10, output: "C434", text: "Car REMI 434" },
	{ id: 10, output: "Autre", text: "Autre - précisez" },
];

const nv_services = [
	{ id: 1, output: "Sanitaires", text: "Des sanitaires" },
	{
		id: 2,
		output: "Vélos",
		text: "Un atelier de réparation et/ou de location vélos",
	},
	{ id: 3, output: "Santé", text: "Un centre de santé" },
	{
		id: 4,
		output: "Tourisme",
		text: "Une antenne de l'office du tourisme",
	},
	{ id: 5, output: "Photomaton", text: "Un Photomaton" },
	{ id: 6, output: "Autre", text: "Autres --> précisez" },
];

const nv_commerces = [
	{ id: 1, output: "Café", text: "Un café" },
	{ id: 2, output: "Presse", text: "Vente de presse" },
	{ id: 3, output: "Supérette", text: "Une supérette" },
	{
		id: 4,
		output: "Distributeur",
		text: "Un distributeur de boissons/nourriture",
	},
	{ id: 5, output: "Proximité", text: "Un commerce de proximité --> précisez" },
	{ id: 6, output: "Autre", text: "Autres --> précisez" },
];
const p_intermodalite_rabattement = [
	{ id: 1, output: "Pied", text: "A pied exclusivement" },
	{ id: 2, output: "Conducteur", text: "Voiture conducteur" },
	{ id: 3, output: "Passager", text: "Voiture passager" },
	{ id: 4, output: "Location", text: "Voiture de location" },
	{ id: 5, output: "Bus", text: "Bus ou Car" },
	{ id: 6, output: "Moto", text: "En scooter/moto" },
	{ id: 7, output: "Taxi", text: "Taxi" },
	{ id: 8, output: "Vélo", text: "Vélo" },
	{ id: 9, output: "Trottinette", text: "Trottinette" },
	{ id: 10, output: "Autre", text: "Autre -> précisez :" },
];



const a_intermodalite_diffusion = [
	{ id: 1, output: "Pied", text: "A pied exclusivement" },
	{ id: 2, output: "Conducteur", text: "Voiture conducteur" },
	{ id: 3, output: "Passager", text: "Voiture passager" },
	{ id: 4, output: "Location", text: "Voiture de location" },
	{ id: 5, output: "Bus", text: "Bus ou Car" },
	{ id: 6, output: "Moto", text: "En scooter/moto" },
	{ id: 7, output: "Taxi", text: "Taxi" },
	{ id: 8, output: "Vélo", text: "Vélo" },
	{ id: 9, output: "Trottinette", text: "Trottinette" },
	{ id: 10, output: "Autre", text: "Autre -> précisez :" },
];

const p_detail_stationnement_rabattement = [
	{
		id: 1,
		output: "Gare_N",
		text: "Parking de la gare au Nord des arrêts de Bus",
	},
	{
		id: 2,
		output: "Gare_S",
		text: "Parking de la gare côté Sud proche du Centre de santé au travail",
	},
	{ id: 3, output: "Médiathèque", text: "Parking de la Médiathèque" },
	{ id: 4, output: "Bd_Grindelle", text: "Boulevard Grindelle" },
	{
		id: 5,
		output: "Halle",
		text: "Parking de la Halle de l'autre côté des voies ferrées",
	},
	{ id: 6, output: "Autre", text: "Autre : préciser" },
];

const p_detail_depose_rabattement = [
	{ id: 1, output: "Déposé", text: "Déposé par une voiture repartie" },
	{
		id: 2,
		output: "Covoitureur",
		text: "Covoitureur d'une voiture stationnée",
	},
];

const p_detail_bus_car = [
	{ id: 1, output: "B1", text: "C'Bus 1" },
	{ id: 2, output: "B2", text: "C'Bus 2" },
	{ id: 3, output: "B3", text: "C'Bus 3" },
	{ id: 4, output: "C3", text: "Car REMI 3" },
	{ id: 5, output: "C3A", text: "Car REMI 3A" },
	{ id: 6, output: "C9", text: "Car REMI 9" },
	{ id: 7, output: "C9A", text: "Car REMI 9A" },
	{ id: 8, output: "C32A", text: "Car REMI 32A" },
	{ id: 9, output: "C32B", text: "Car REMI 32B" },
	{ id: 10, output: "C434", text: "Car REMI 434" },
	{ id: 10, output: "Autre", text: "Autre - précisez" },
];

const p_detail_velo = [
	{ id: 1, output: "Arceaux", text: "Sur les arceaux devant la gare" },
	{ id: 2, output: "Train", text: "Je prends mon vélo dans le train" },
	{ id: 3, output: "Autre", text: "Autre - précisez" },
];
const p_detail_trottinette = [
	{ id: 1, output: "Arceaux", text: "Sur les arceaux devant la gare" },
	{ id: 2, output: "Train", text: "Je prends mon vélo dans le train" },
	{ id: 3, output: "Autre", text: "Autre - précisez" },
];

const p_origine_commune = [
	{ id: 1, output: "Châteaudun", text: "Châteaudun" },
	{ id: 2, output: "Autre", text: "Autre commune : précisez" },
];

export {
	sexes,
	zone,
	usagers,
	typeUsagers,
	motif,
	frequence,
	services,
	commerces,
	csp,
	nv_motif_presence,
	nv_bus_car_diffusion,
	nv_bus_car_rabattement,
	nv_services,
	nv_commerces,
	p_intermodalite_rabattement,
	p_detail_stationnement_rabattement,
	p_detail_depose_rabattement,
	p_detail_bus_car,
	p_detail_velo,
	p_detail_trottinette,
	p_origine_commune,
	a_intermodalite_diffusion,
};
