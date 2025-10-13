<template>
  <div v-if="isLoading">
    <p>Loading Pricing Stats...</p>
  </div>
  <div v-else>
    <AgGridVue
      class="h-[90vh] w-full"
      :column-defs="columnDefs"
      :row-data="data[selectedZipCode]?.rates"
      :default-col-def="defaultColDef"
      :theme="myTheme"
    />
  </div>
</template>

<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3'
import { themeQuartz } from 'ag-grid-community'
import { type ColDef } from 'ag-grid-community'
import { ref } from 'vue'

const selectedZipCode = ref('99203') // simulate zip code from url

const myTheme = themeQuartz.withParams({
  browserColorScheme: 'light',
  fontFamily: 'inherit',
  headerFontSize: 14,
  wrapperBorder: false,
  wrapperBorderRadius: 4,
  spacing: 4,
})

defineProps<{
  isLoading: boolean
  data: Record<string, { rates: Record<string, unknown>[] }>
}>()

function formatCurrency(value: number) {
  return `$${value || 0}`
}

const columnDefs = ref<ColDef[]>([
  {
    field: 'entity_name',
    headerName: 'Entity Name',
    minWidth: 200,
    width: 250,
  },
  {
    field: 'npi_taxonomy_name',
    headerName: 'NPI Type',
    minWidth: 150,
  },
  { field: 'entity_address', headerName: 'Entity Address', width: 250, minWidth: 200 },
  {
    field: 'rate',
    headerName: 'Rate',
    valueFormatter: (params) => formatCurrency(params.value),
    width: 120,
    minWidth: 100,
    cellStyle: { fontWeight: '500' },
  },
  {
    field: 'mrf_rate',
    headerName: 'MRF Rate',
    valueFormatter: (params) => formatCurrency(params.value),
    width: 120,
    minWidth: 100,
    cellStyle: { fontWeight: '500' },
  },
  {
    field: 'cms_baseline_rate',
    headerName: 'CMS Baseline Rate',
    valueFormatter: (params) => formatCurrency(params.value),
    cellStyle: { fontWeight: '500' },
    width: 120,
    minWidth: 100,
  },
  {
    field: 'cms_baseline_schedule',
    headerName: 'CMS Baseline Schedule',
    minWidth: 220,
  },
  {
    field: 'date_accessed',
    headerName: 'Date Accessed',
    valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    width: 120,
    minWidth: 100,
  },
])

const defaultColDef = ref<ColDef>({
  filter: true,
  sortable: true,
  resizable: true,
  wrapText: true,
  autoHeaderHeight: true,
  autoHeight: true,
})
</script>
