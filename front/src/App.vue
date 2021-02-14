<template>
  <div>
    <app-banner title="ZOOX" subtitle="Estados & Cidades"></app-banner>
    <div class="container">
      <div class="columns block">
        <div class="column is-12">
          <app-table
            :loadedData="estados"
            :asyncCall="true"
            :cols="colsForEstados"
            v-if="estados !== null"
            @fetchCidades="getCidades"
            title="Estados"
          ></app-table>
          <app-table
            :loadedData="cidades"
            :asyncCall="false"
            :cols="colsForCidades"
            v-if="cidades"
            title="Cidades"
          ></app-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner';
import Table from './components/Table';
import { ZooxApiService } from './services/ZooxApiService';
import { ESTADOS_COLUMNS, CIDADES_COLUMNS } from './helper/const';
export default {
  name: 'App',
  data() {
    return {
      estados: null,
      cidades: null,
      colsForEstados: ESTADOS_COLUMNS,
      colsForCidades: CIDADES_COLUMNS,
    };
  },
  components: {
    appBanner: Banner,
    appTable: Table,
  },
  async created() {
    this.estados = await ZooxApiService.getEstados();
  },
  methods: {
    async getCidades(id) {
      this.cidades = null;
      const data = await ZooxApiService.getCidades(`?_idEstado=${id}`);
      if (data.length > 0) {
        this.cidades = data;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
