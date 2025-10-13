<template>
  <h2>Pricing Table</h2>

  <div v-if="isLoading">
    <p>Loading Pricing Stats...</p>
  </div>
  <div v-else>
    <AgGridVue
      class="h-[90vh]"
      :column-defs="columnDefs"
      :row-data="data[selectedZipCode].rates"
      :default-col-def="defaultColDef"
    />
  </div>
</template>

<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3'
import { type ColDef } from 'ag-grid-community'
import { ref } from 'vue'

const selectedZipCode = ref('99203') // simulate zip code from url

defineProps<{
  isLoading: boolean
  data: any
}>()

function formatCurrency(value: number) {
  return `$${value || 0}`
}

const columnDefs = ref<ColDef[]>([
  { field: 'entity_name', headerName: 'Entity Name' },
  { field: 'npi_taxonomy_name', headerName: 'NPI Type' },
  { field: 'negotiation_type', headerName: 'Negotiation Type' },
  { field: 'rate', valueFormatter: (params) => formatCurrency(params.value), width: 120 },
  {
    field: 'mrf_rate',
    headerName: 'MRF Rate',
    valueFormatter: (params) => formatCurrency(params.value),
    width: 120,
  },
  {
    field: 'cms_baseline_rate',
    headerName: 'CMS Baseline Rate',
    valueFormatter: (params) => formatCurrency(params.value),
  },
  { field: 'cms_baseline_schedule', headerName: 'CMS Baseline Schedule' },
  { field: 'arrangement', headerName: 'Arrangement', width: 200 },
  {
    field: 'date_accessed',
    headerName: 'Date Accessed',
    valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
  },
])

const defaultColDef = ref<ColDef>({
  filter: true,
  sortable: true,
  resizable: true,
})
</script>

<style scoped></style>
