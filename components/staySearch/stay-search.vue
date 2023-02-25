<template>
  <div class="bg-white stay-search m-8 rounded-md">
    <form class="flex p-3 gap-10 items-center justify-between">
      <label class="text-sm pl-4"
        >Check-In
        <input type="date" />
      </label>
      <label class="text-sm pl-6"
        >Check-Out
        <input type="date" />
      </label>
      <label class="text-sm pl-6"
        >Guests
        <input type="text" />
      </label>

      <button type="submit" class="flex items-center justify-center rounded-md">
        <IconSearch color="#fff" />
      </button>
    </form>
  </div>
</template>

<script setup>
import IconSearch from "@/assets/icons/search";
</script>

<styles lang="scss" scoped>
.stay-search {
  label {
    display: block;
    border-left: 1px solid var(--colors--grey-dark);

    &:first-child {
      border-left: 0 !important;
    }
  }
  input {
    display: block;
    width: 100%;
  }
  button {
    width: 3.25rem;
    height: 3.25rem;
    background: var(--colors--blue);
  }
}
</styles>
