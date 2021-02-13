export const get3RandomCards = () => cards.sort(() => 0.5 - Math.random()).slice(cards, 3);

const cards = [
	{
		id: 1,
		name: 'Hijo del mal',
		type: 2,
		title: 'Alma Maligna',
		subtitle: 'Cria cuervos y te sacaran los ojos.',
		leyend: 'Una persona, tal vez joven, de mala actitud e impaciente, le impedira progresar. Obstáculo.',
		card: require('../assets/cards/card-front.jpg'),
	},
	{
		id: 2,
		name: 'Infestador Acido',
		type: 3,
		title: 'Demonio',
		subtitle: 'No solo los hombres inician pestes. Los demonios tambien gustan de ello.',
		leyend: 'La enfermedad ataca a su hogar. Tal situacion no deja lugar para nada más.',
		card: require('../assets/cards/card-front.jpg'),
	},
	{
		id: 3,
		name: 'Carroza Fúnebre',
		type: 2,
		title: 'Calamidad',
		subtitle: 'No siempre la vida nos conduce al lugar que queremos.',
		leyend: 'Derrota. Desastre. Mala salud. Pobreza y necesidades.',
		card: require('../assets/cards/card-front.jpg'),
	},
];
