export const ZOOX_API_BASE_URL = 'https://zoox-api.albertokato.com.br/api/v1';
export const TIMEOUT = 120000;
export const KEY = 'ZOOX1234';
export const ESTADOS_COLUMNS = [
  {
    field: '_id',
    label: 'ID',
    width: '40',
    searchable: true,
  },
  {
    field: 'nome',
    label: 'Nome',
    sortable: true,
    searchable: true,
  },
  {
    field: 'sigla',
    label: 'Sigla',
    centered: true,
    sortable: true,
    searchable: true,
  },
  {
    field: 'criado_em',
    label: 'Criado',
    sortable: true,
    searchable: true,
  },
  {
    field: 'atualizado_em',
    label: 'Atualizado',
    sortable: true,
    searchable: true,
  },
];

export const CIDADES_COLUMNS = [
  {
    field: '_id',
    label: 'ID',
    width: '40',
    searchable: true,
  },
  {
    field: 'nome',
    label: 'Nome',
    sortable: true,
    searchable: true,
  },
  {
    field: '_idEstado',
    label: '_idEstado',
    centered: true,
    sortable: true,
    searchable: true,
  },
  {
    field: 'criado_em',
    label: 'Criado',
    sortable: true,
    searchable: true,
  },
  {
    field: 'atualizado_em',
    label: 'Atualizado',
    sortable: true,
    searchable: true,
  },
];
