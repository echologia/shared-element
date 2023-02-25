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
[data-starport-craft] {
  background: #0805;
}
[data-starport-proxy]:not([data-starport-landed]) {
  background: #8005;
}

.starport-placeholder {
  visibility: hidden;
}

[data-starport-landed="true"] + .starport-placeholder {
  display: none;
}
* {
  /* transition-duration: 3s !important; */
}
</style>
