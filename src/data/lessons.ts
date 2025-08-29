export type Lesson = {
	id: string;
	title: string;
	description: string;
	content: string[];
};

export const lessons: Lesson[] = [
	{
		id: 'intro',
		title: 'Introdução ao Italiano',
		description: 'Saudações, apresentações e expressões básicas.',
		content: [
			'Ciao! – Olá!',
			'Come ti chiami? – Como você se chama?',
			'Mi chiamo... – Eu me chamo...',
			'Piacere – Prazer',
		],
	},
	{
		id: 'alfabeto',
		title: 'Alfabeto e Pronúncia',
		description: 'Sons, letras e dicas de pronúncia.',
		content: [
			'Alfabeto: 21 letras (j, k, w, x, y em estrangeirismos).',
			'Pronúncia do “c” e “g” antes de e/i.',
			'Duplas consoantes e ênfase.',
		],
	},
	{
		id: 'numeri',
		title: 'Números e Datas',
		description: 'Contagem básica e datas em italiano.',
		content: [
			'0-10: zero, uno, due, tre, quattro, cinque, sei, sette, otto, nove, dieci',
			'Dias da semana e meses do ano',
			'Formas de dizer datas',
		],
	},
];

