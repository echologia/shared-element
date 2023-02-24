<template>
    <div class="bg-white">
        <ul class="container mx-auto py-8 flex">
            <li class="step01 step flex items-center active">
                <span class="number flex items-center justify-center rounded-md">1</span>
                <span class="description rounded-md">Availability</span>
                <span class="line"></span>
            </li>
            <li class="step02 step flex items-center">
                <span class="number flex items-center justify-center rounded-md">2</span>
                <span class="description">Extras</span>
                <span class="line"></span>
            </li>
            <li class="step03 step flex items-center">
                <span class="number flex items-center justify-center rounded-md">3</span>
                <span class="description">Summary</span>
                <span class="line"></span>
            </li>
            <li class="step04 step flex">
                <span class="number flex items-center justify-center rounded-md">4</span>
                <span class="description">Confirmation</span>
            </li>
        </ul>
    </div>
</template>

<styles lang="scss" scoped>
.flex {
    gap: 1rem;
    width: 100%;
}

.step.active {
    .line {
        border-top: 1px solid var(--colors--blue);
    }
    .description {
        background: var(--colors--grey-light)
    }
    .number {
        background: var(--colors--blue);
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
    font-size: .75rem;
    flex-shrink: 0;
    color: var(--colors--white);
    background: var(--colors--grey-dark);
}
</styles>