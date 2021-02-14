<template>
  <div>
    <section>
      <h1 class="title">{{ tableName }}</h1>
      <b-field>
        <b-button
          label="Clear selected"
          type="is-danger"
          icon-left="close"
          :disabled="!selected"
          @click="selected = null"
        />
      </b-field>

      <b-tabs>
        <b-tab-item label="Table">
          <b-table
            :data="data"
            :columns="columns"
            :selected.sync="selected"
            :paginated="isPaginated"
            :per-page="perPage"
            :pagination-simple="isPaginationSimple"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            :default-sort-direction="defaultSortDirection"
            default-sort="nome"
            @click="(row, index) => fetchCidades(row)"
            focusable
          >
          </b-table>
        </b-tab-item>

        <b-tab-item label="Selected">
          <pre>{{ selected }}</pre>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    loadedData: Array,
    asyncCall: Boolean,
    cols: Array,
    title: String,
  },
  data() {
    const data = this.loadedData;

    return {
      data,
      tableName: this.title,
      defaultOpenedDetails: [1],
      selected: null,
      isPaginated: true,
      perPage: 5,
      isPaginationSimple: false,
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      columns: this.cols,
    };
  },
  methods: {
    fetchCidades(row) {
      if (this.asyncCall) {
        this.$emit('fetchCidades', row._id);
      }
    },
  },
};
</script>

<style></style>
