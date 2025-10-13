<template>
  <h2>Pricing</h2>

  <section v-if="error">
    <p>Error: {{ error.message }}</p>
  </section>

  <template v-else>
    <section>
      <PricingStats :is-loading="isLoading" :data="data" />
    </section>

    <section>
      <PricingTable :is-loading="isLoading" :data="data" />
    </section>
  </template>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'

import PricingTable from '@/components/PricingTable.vue'
import PricingStats from '@/components/PricingStats.vue'

// TODO: composable
async function fetchPricingData() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate loading time

  const response = await fetch('https://dummyjson.com/products/1')
  return await response.json()
}

const { data, isLoading, error } = useQuery({
  queryKey: ['pricing'],
  queryFn: fetchPricingData,
})
</script>

<style scoped></style>
