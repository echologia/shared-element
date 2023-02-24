<template>
    <nav role="navigation" aria-label="Hauptnavigation">
        <ul>
            <li><a href="hotel-info" title="Hotel Info">Hotel Info</a></li>
            <li><a href="contacts" title="Contacts">Contacts</a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
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
</style>