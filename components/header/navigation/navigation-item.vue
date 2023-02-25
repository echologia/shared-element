<template>
  <div class="navigation-item w-full flex justify-between">
    <nav role="navigation" aria-label="Hauptnavigation">
      <ul class="font-medium">
        <li><a href="hotel-info" title="Hotel Info">Hotel Info</a></li>
        <li><a href="contacts" title="Contacts">Contacts</a></li>
      </ul>
    </nav>

    <nav role="navigation" aria-label="Informations Bereich">
      <ul class="font-medium">
        <li><a href="hotel-info" title="Hotel Info">Add Promocode</a></li>
        <li><a href="contacts" title="Contacts">USD</a></li>
        <li><a href="contacts" title="Contacts">EN</a></li>
        <li><a href="contacts" title="Contacts">LOG IN</a></li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navigation-item {
  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
