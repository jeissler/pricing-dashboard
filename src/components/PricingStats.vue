<template>
  <div v-if="isLoading">
    <p>Loading Pricing Stats...</p>
  </div>
  <div v-else class="grid grid-cols-1 gap-px bg-gray-900/5 lg:grid-cols-3">
    <!-- Average Rate by Service Type -->
    <div class="bg-white px-4 py-6 sm:px-6 lg:px-8 col-span-2">
      <p class="text-lg font-medium text-gray-500">Average Rate by Service Type</p>

      <AgCharts :options="chartOptions" />
    </div>

    <!-- Service Types -->
    <div class="bg-white px-4 py-6 sm:px-6 lg:px-8 col-span-1">
      <p class="font-medium text-gray-500">Service Stats</p>
      <div class="mt-2 mb-4">
        <p class="text-4xl font-semibold tracking-tight text-gray-900">
          {{ npiTypes.length }}
        </p>
        <p class="text-sm text-gray-500">Total NPI Types</p>
      </div>

      <div class="border-t border-gray-200 pt-4">
        <p class="text-sm text-gray-500 mb-1">Highest Value Service Type</p>
        <p class="text-2xl font-semibold tracking-tight text-gray-900">
          {{ highestValueServiceType }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { AgCharts } from 'ag-charts-vue3'
import { type AgStandaloneChartOptions } from 'ag-charts-community'
import { computed } from 'vue'
import { type PricingData } from '@/data/types/pricing'

const props = defineProps<{
  isLoading: boolean
  data: PricingData | undefined
}>()

const npiTypes = computed(() => {
  if (!props.data) return []

  const typeData = new Map()

  // Collect all rates for each NPI type
  Object.values(props.data).forEach((serviceData) => {
    serviceData.rates.forEach((rate) => {
      if (rate.npi_taxonomy && rate.npi_taxonomy_name && rate.rate) {
        const taxonomyCode = rate.npi_taxonomy
        const taxonomyName = rate.npi_taxonomy_name
        const rateValue = Number(rate.rate)

        if (!typeData.has(taxonomyCode)) {
          typeData.set(taxonomyCode, {
            name: taxonomyName,
            rates: [],
          })
        }
        typeData.get(taxonomyCode).rates.push(rateValue)
      }
    })
  })

  // Calculate averages and return simple objects
  const result = []
  for (const type of typeData.values()) {
    const totalRates = type.rates.reduce((sum: number, rate: number) => sum + rate, 0)
    const averageValue = totalRates / type.rates.length

    result.push({
      name: type.name,
      averageValue: averageValue,
    })
  }

  return result
})

const highestValueServiceType = computed(() => {
  return npiTypes.value.reduce((max, type) => (type.averageValue > max.averageValue ? type : max))
    .name
})

const chartOptions = computed(() => {
  return {
    data: npiTypes.value.map((type) => {
      return {
        name: `${type.name.substring(0, 35)}${type.name.length > 35 ? '...' : ''}`,
        averageValue: type.averageValue,
      }
    }),

    series: [
      {
        type: 'donut',
        calloutLabelKey: 'name',
        angleKey: 'averageValue',
        tooltip: {
          renderer: (params: {
            datum: { name: string; averageValue: number }
            angleKey: string
          }) => {
            return {
              heading: params.datum.name,
              data: [{ label: 'Average Rate', value: `$${params.datum.averageValue.toFixed(2)}` }],
            }
          },
        },
      },
    ],
  }
}) as AgStandaloneChartOptions
</script>
