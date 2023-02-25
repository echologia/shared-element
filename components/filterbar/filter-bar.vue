<template>
  <div class="filter-bar flex gap-2 justify-between items-center">
    <div class="filter flex gap-2">
      <div class="filter bg-white p-2 rounded-md font-medium text-xs">
        Compare rooms
      </div>
      <div class="filter bg-white p-2 rounded-md font-medium text-xs">
        <span class="light">Sort by:</span> Recommended
      </div>
      <div class="filter bg-white p-2 rounded-md font-medium text-xs">
        Compare rooms
      </div>
    </div>
    <div class="available-rooms">
      <span
        class="number bg-white inline-flex items-center justify-center font-medium px-2 rounded-md mr-2"
        >{{ rooms.length }}</span
      >
      <span class="description text-md">Available rooms</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import rooms from "@/data";
</script>
