<template>
  <header class="bg-blue-700 text-white py-2 px-4">
    <div class="max-w-7xl mx-auto">
      <h1>Pricing Dashboard - Jeremy Eissler</h1>
    </div>
  </header>
  <main class="min-h-screen max-w-7xl mx-auto">
    <PricingDashboard />
  </main>
  <footer class="border-t border-blue-500 py-2 px-4 max-w-7xl mx-auto mt-10">
    <p class="text-gray-600 text-right text-sm">&copy; Copyright {{ new Date().getFullYear() }}</p>
  </footer>
</template>

<script setup lang="ts">
import PricingDashboard from './views/PricingDashboard.vue'
</script>

<style scoped></style>
