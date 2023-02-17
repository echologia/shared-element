<template>
  <div class="p-5 shadow-md rounded-md bg-white my-4">
    <div class="space-x-4 flex">
      <img
        :src="room.images[0]"
        class="h-[300px] w-[300px] object-cover rounded-md"
      />
      <div class="flex flex-col">
        <h1 class="text-2xl">{{ room.name }}</h1>
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
defineProps<{
  room: Room;
}>();
</script>
