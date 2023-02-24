<template>
  <div class="p-5 shadow-md rounded-md bg-white my-4">
    <Starport :port="'room-image-' + room.id" keep-alive>
      <img :src="room.images[0]" />
    </Starport>

    <div class="space-x-4 flex">
      <div class="flex flex-col">
        <Starport :port="'room-headline-' + room.id" keep-alive>
        <h1 class="text-2xl">{{ room.name }}</h1>
        </Starport>
        <p class="text-ellipsis break-words overflow-hidden flex-grow">
          {{ room.description }}
        </p>

        <div class="flex flex-wrap space-x-2 flex-shrink-0">
          <Tag v-for="tag in room.tags">{{ tag }}</Tag>
        </div>
      </div>

      <div class="w-full flex justify-end">
        <div class="text-blue-500 text-3xl">${{ room.price }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Starport } from 'vue-starport'
defineProps<{
  room: Room;
}>();
</script>
