import { zoox as axios } from '../axios';
import { KEY } from '../helper/const';

export const ZooxApiService = {
  async getEstados(query = '') {
    try {
      const response = await axios.get(`/estados${query}`, {
        headers: { 'X-Api-Key': KEY },
      });
      let { Estados } = response.data.data;
      Estados = Estados.map(e => {
        e.criado_em = new Date(e.criado_em).toLocaleString('pt-Br');
        e.atualizado_em = new Date(e.atualizado_em).toLocaleString('pt-Br');
        return e;
      });
      return Estados;
    } catch (error) {
      console.log(error);
    }
  },
  async getCidades(query = '') {
    try {
      const response = await axios.get(`/cidades${query}`, {
        headers: { 'X-Api-Key': KEY },
      });
      let { Cidades } = response.data.data;
      Cidades = Cidades.map(e => {
        e.criado_em = new Date(e.criado_em).toLocaleString('pt-Br');
        e.atualizado_em = new Date(e.atualizado_em).toLocaleString('pt-Br');
        return e;
      });
      return Cidades;
    } catch (error) {
      console.log(error);
    }
  },
};
