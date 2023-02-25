<template>
  <div class="bg-white step-bar">
    <ul class="step-bar-inner flex mx-auto">
      <li
        v-for="(listItem, i) in listItems"
        :key="i"
        class="step flex items-center"
        :class="{ active: i === activeItem }"
        @click="selectItem(i)"
      >
        <span class="number flex items-center justify-center rounded-md">{{
          listItem.id
        }}</span>
        <span class="description rounded-md">{{ listItem.description }}</span>
        <span class="line"></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        {
          id: 1,
          description: "Availability",
        },
        {
          id: 2,
          description: "Extras",
        },
        {
          id: 3,
          description: "Summary",
        },
        {
          id: 4,
          description: "Confirmation",
        },
      ],
      activeItem: 0,
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
  },
};
</script>

<styles lang="scss" scoped>
.step-bar {
  &-inner {
    max-width: calc(1536px - 25% - 3rem);
    padding: 2rem;
  }
  .flex {
    gap: 1rem;
    width: 100%;
  }

  .step {
    cursor: pointer;
    font-weight: 500;
    color: var(--colors--grey-dark);

    * {
      transition: all linear 0.2s;
    }

    &:last-child {
      width: auto;
    }

    &.active {
      .line {
        border-top: 1px solid var(--colors--blue);
      }
      .description {
        color: var(--colors--blue-dark);
        background: var(--colors--grey-light);
      }
      .number {
        background: var(--colors--blue);
      }
    }
  }

  .line {
    display: block;
    width: 100%;
    margin-right: 1rem;
    margin-left: 1rem;
    border-top: 1px dashed var(--colors--grey-dark);
  }

  .number {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
    flex-shrink: 0;
    color: var(--colors--white);
    background: var(--colors--grey-dark);
  }
}
</styles>
