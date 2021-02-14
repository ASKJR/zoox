<template>
  <div>
    <app-banner title="ZOOX" subtitle="Estados & Cidades"></app-banner>
    <div class="container">
      <div class="columns block">
        <div class="column is-12">
          <app-table></app-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner';
import Table from './components/Table';
export default {
  name: 'App',
  components: {
    appBanner: Banner,
    appTable: Table,
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
