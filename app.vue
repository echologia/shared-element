<template>
  <StarportCarrier>
    <div class="h-screen">
      <HeaderItem />
      <NuxtPage />
    </div>
  </StarportCarrier>
</template>

<script setup>
import { StarportCarrier } from "vue-starport";
</script>

<style>
.starport-placeholder {
  visibility: hidden;
}

[data-starport-landed="true"] + .starport-placeholder {
  display: none;
}

[data-starport-craft] {
  white-space: nowrap;
  transition-duration: 0.5s !important;
}

* {
  /* transition-duration: 3s !important; */
}
</style>
