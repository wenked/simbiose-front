export interface PaginatedRounetArgs {
	page: number;
	limit: number;
}

export interface Rounet {
	id_projeto: number;
	pronac: string;
	ano_projeto: string;
	nome: string;
	segmento: string;
	area: string;
	uf: string;
	municipio: string;
	data_inicio: string;
	data_termino: string;
	situacao: string;
	mecanismo: string;
	enquadramento: string;
	valor_captado: string;
	valor_aprovado: string;
	acessibilidade: string;
	objetivos: string | null;
	justificativa: string;
	etapa: string | null;
	ficha_tecnica: string;
	impacto_ambiental: string;
	especificacao_tecnica: string;
	providencia: string;
	democratizacao: string;
	sinopse: string;
	resumo: string;
	created_at: Date | null;
	updated_at: Date | null;
	valor_projeto: string;
	outras_fontes: string;
	valor_proposta: string;
	valor_solicitado: string;
	objetivo: string | null;
	estrategia_execucao: string;
	link_incentivadores: string;
}

export interface RounetPaginatedData {
	data: Rounet[];
	current_page: number;
	limit: number;
	total_pages: number;
	has_more: boolean;
}
