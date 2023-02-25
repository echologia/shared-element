<template>
  <div>
    <FilterbarFilterBar />
    <BookingBar />
    <div class="container mx-auto py-8">
      <NuxtLink v-for="room in rooms" :key="room.id" :to="'/' + room.id">
        <!-- eslint-disable-next-line vue/no-parsing-error -->
        <RoomCardRoomcardItem :room="<Room>room" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import rooms from "@/data";
</script>
