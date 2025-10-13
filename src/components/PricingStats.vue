<template>
  <h2>Pricing Stats</h2>

  <div v-if="isLoading">
    <p>Loading Pricing Stats...</p>
  </div>
  <div v-else>
    <p></p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isLoading: boolean
  data: any
}>()
</script>

<style scoped></style>
