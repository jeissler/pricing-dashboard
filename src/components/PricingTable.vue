<template>
  <h2>Pricing Table</h2>

  <div v-if="isLoading">
    <p>Loading Pricing Stats...</p>
  </div>
  <div v-else>
    <p>{{ data }}</p>
  </div>
</template>

<script setup lang="ts"></script>

<script setup lang="ts">
defineProps<{
  isLoading: boolean
  data: any
}>()
</script>
