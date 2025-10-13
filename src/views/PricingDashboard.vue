<template>
  <section v-if="error">
    <p>Error: {{ error.message }}</p>
  </section>

  <template v-else>
    <section class="py-5">
      <PricingStats :is-loading="isLoading" :data="data" />
    </section>

    <section class="py-5">
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
