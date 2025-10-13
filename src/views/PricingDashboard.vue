<template>
  <h2>Pricing</h2>
  <section>
    <PricingStats />
  </section>
  <section>
    <PricingTable />
  </section>
</template>

<script setup lang="ts">
import PricingTable from '@/components/PricingTable.vue'
import PricingStats from '@/components/PricingStats.vue'
</script>

<style scoped></style>
