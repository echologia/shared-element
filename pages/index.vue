<template>
  <div class="flex gap-0">
    <div class="content-left w-3/4">
      <StepbarStepBar />
      <StaySearch />
      <div class="m-10">
        <h1 class="text-3xl font-medium mb-6">All available rooms</h1>
        <FilterbarFilterBar />
        <NuxtLink v-for="room in rooms" :key="room.id" :to="'/' + room.id">
          <!-- eslint-disable-next-line vue/no-parsing-error -->
          <RoomCardRoomcardItem :room="<Room>room" />
        </NuxtLink>
      </div>
    </div>
    <div class="content-right w-1/4">
      <BookingBar />
    </div>
  </div>
</template>
<script setup lang="ts">
import rooms from "@/data";
</script>
