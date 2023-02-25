<template>
  <div class="detail container mx-auto pt-6">
    <NuxtLink class="lowercase font-bold text-sm" to="/">Go Back</NuxtLink>
    <div v-if="!room">Room {{ id }} not found</div>
    <div v-else>
      <div class="overflow-hidden pt-4">
        <Starport
          :port="'room-headline-' + room.id"
          keep-alive
          class="starport-headline"
        >
          <h1 class="text-2xl">{{ room.name }}</h1>
        </Starport>
        <h1 class="text-2xl starport-placeholder">{{ room.name }}</h1>
      </div>

      <div class="p-5 shadow-md rounded-md bg-white my-4">
        <div class="images flex gap-2">
          <div class="image-wrapper rounded-md">
            <Starport
              :port="'room-image-' + room.id"
              keep-alive
              class="starport-image"
            >
              <img :src="room.images[0]" />
            </Starport>
            <img class="starport-placeholder" :src="room.images[0]" />
          </div>
          <div class="gallery space-x-4 flex overflow-y-auto">
            <div class="flex flex-col space-y-2">
              <img
                v-for="img in otherImages"
                :key="img"
                :src="img"
                class="h-[300px] w-full object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <p class="text-ellipsis break-words overflow-hidden flex-grow">
            {{ room.description }}
          </p>

          <div class="flex flex-wrap space-x-2 flex-shrink-0">
            <Tag v-for="tag in room.tags" :key="tag">{{ tag }}</Tag>
          </div>
        </div>
        <div class="w-full flex justify-end">
          <div class="text-blue-500 text-3xl">${{ room.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Starport } from "vue-starport";
import rooms from "@/data";
const { id } = useRoute().params;
const room = rooms.find((room) => room.id === Number(id));
const otherImages = computed(() => room?.images.slice(1, room.images.length));
</script>

<style lang="scss">
.detail.container {
  max-width: 1200px;
}

.images {
  max-height: 60vh;
  overflow: hidden;

  .image-wrapper {
    width: 70%;
    max-height: 100%;
  }
}

.gallery {
  width: 30%;
}
</style>
