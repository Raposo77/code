export type VocabItem = {
	id: string;
	italian: string;
	translation: string;
	phrase?: string;
};

export const vocabulary: VocabItem[] = [
	{ id: 'ciao', italian: 'Ciao', translation: 'Olá' },
	{ id: 'grazie', italian: 'Grazie', translation: 'Obrigado(a)' },
	{ id: 'perfavore', italian: 'Per favore', translation: 'Por favor' },
	{ id: 'buongiorno', italian: 'Buongiorno', translation: 'Bom dia' },
	{ id: 'buonasera', italian: 'Buonasera', translation: 'Boa tarde/noite' },
];

