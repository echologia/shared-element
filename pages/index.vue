<template>
  <div>
    <Filterbar />
    <Booking />
    <div class="container mx-auto py-8">
      <NuxtLink v-for="room in rooms" :key="room.id" :to="'/' + room.id">
        <RoomCard :room="<Room />room" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import rooms from "@/data";
</script>
