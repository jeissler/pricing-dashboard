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
import PricingTable from '@/components/PricingTable.vue'
import PricingStats from '@/components/PricingStats.vue'
import { usePricingData } from '@/composables/usePricingData'

// TODO: composable
const { data, isLoading, error } = usePricingData()
</script>

<style scoped></style>
