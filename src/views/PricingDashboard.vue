<template>
  <section v-if="error">
    <p>Error: {{ error.message }}</p>
  </section>

  <template v-else>
    <select v-model="selectedZipCode" class="w-100px border border-gray-300 rounded-md p-2 mt-4">
      <option value="64014">64014</option>
      <option value="99203">99203</option>
    </select>

    <section class="py-5">
      <PricingStats :is-loading="isLoading" :data="rateData" />
    </section>

    <section class="py-5">
      <PricingTable :is-loading="isLoading" :data="rateData" />
    </section>
  </template>
</template>

<script setup lang="ts">
import PricingTable from '@/components/PricingTable.vue'
import PricingStats from '@/components/PricingStats.vue'
import { usePricingData } from '@/composables/usePricingData'
import { computed, ref } from 'vue'

const selectedZipCode = ref('99203')

const { data, isLoading, error } = usePricingData(selectedZipCode.value)

const rateData = computed(() => data.value?.[selectedZipCode.value]?.rates || [])
</script>
