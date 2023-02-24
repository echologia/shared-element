<template>
  <StarportCarrier>
  <div class="bg-gray-50 h-screen">
    <div class="container mx-auto py-8">
      <NuxtPage />
    </div>
  </div>
</StarportCarrier>
</template>

<script setup>
import { StarportCarrier } from 'vue-starport'
</script>

<style>
  [data-starport-craft] {
    background: #0805;
    border: 1px solid red;
  }
  [data-starport-proxy]:not([data-starport-landed]) {
    background: #8005;
    border: 1px solid blue;
  }
</style>