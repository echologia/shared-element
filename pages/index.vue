<template>
  <div>
    <NuxtLink v-for="room in rooms" :to="'/' + room.id">
      <RoomItem :room="<Room>room" />
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import rooms from "@/data";
</script>
