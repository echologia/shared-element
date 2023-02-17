<template>
  <NuxtLink class="lowercase font-bold" to="/">Go Back</NuxtLink>
  <div v-if="!room">Room {{ id }} not found</div>
  <div v-else class="p-5 shadow-md rounded-md bg-white my-4">
    <div class="space-x-4 flex max-h-[500px] overflow-y-auto">
      <img
        :src="room.images[0]"
        class="h-[500px] w-full object-cover rounded-md"
      />
      <div class="flex flex-col space-y-2">
        <img
          v-for="img in otherImages"
          :src="img"
          class="h-[300px] w-full object-cover rounded-md"
        />
      </div>
    </div>
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
</template>

<script setup lang="ts">
import rooms from "@/data";

const { id } = useRoute().params;
const room = rooms.find((room) => room.id === Number(id));
const otherImages = computed(() => room?.images.slice(1, room.images.length));
</script>
