<template>
  <div
    class="room-card-item p-5 shadow-md rounded-md bg-white my-4 flex items-start gap-8"
  >
    <div class="image-wrapper rounded-md">
      <Starport :port="'room-image-' + room.id" keep-alive>
        <img :src="room.images[0]" />
      </Starport>
      <img class="starport-placeholder" :src="room.images[0]" />
    </div>

    <div class="content">
      <div class="header flex justify-between py-5">
        <div class="headline-wrapper">
          <Starport :port="'room-headline-' + room.id" keep-alive>
            <h1 class="text-2xl font-medium">{{ room.name }}</h1>
          </Starport>
          <h1 class="text-2xl starport-placeholder">{{ room.name }}</h1>
        </div>

        <div class="flex items-end">
          <span class="text-sm mb-1 pr-3">from</span>
          <div class="text-blue-500 text-3xl">{{ room.price }}$</div>
        </div>
      </div>

      <div class="description-wrapper pb-4 mb-4">
        <p
          class="text-ellipsis break-words overflow-hidden flex-grow description"
        >
          {{ room.description }}
        </p>
        <NuxtLink :to="'/' + room.id">Read more</NuxtLink>
      </div>

      <div class="flex flex-wrap space-x-2 flex-shrink-0">
        <RoomCardTagItem v-for="tag in room.tags" :key="tag">{{
          tag
        }}</RoomCardTagItem>
      </div>

      <div
        class="add-info flex flex-wrap space-x-2 flex-shrink-0 text-sm justify-between"
      >
        <div class="persons">
          <p>Up to 2 guests</p>
        </div>
        <div class="size">
          <p>24 sq.m</p>
        </div>
        <button class="text-white rounded-md px-10">Book now</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Starport } from "vue-starport";
defineProps<{
  room: Room;
}>();
</script>

<style lang="scss">
.image-wrapper {
  width: 35%;
  overflow: hidden;
}
.content {
  width: 65%;

  .header {
    border-bottom: 1px solid var(--colors--grey-light);
  }

  .description-wrapper {
    max-width: 90%;
    overflow: hidden;
    border-bottom: 1px solid var(--colors--grey-light);

    .description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      margin-bottom: 0;
      overflow: hidden;
    }

    a {
      color: var(--colors--blue);
    }
  }

  .add-info {
    button {
      background: var(--colors--blue);
    }
  }
}
</style>
