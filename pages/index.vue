<template>
    <Filterbar />
    <Booking />
    <div class="container mx-auto py-8">
      <NuxtLink v-for="room in rooms" :to="'/' + room.id">
        <RoomCard :room="<Room>room" />
      </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import rooms from "@/data";
</script>
