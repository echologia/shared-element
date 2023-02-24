<template>
  <StarportCarrier>
    <div class="h-screen">
      <Header />
      
        <NuxtPage />
      
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