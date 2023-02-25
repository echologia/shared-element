<template>
  <div class="booking-bar bg-white p-3 px-5 rounded-bl-lg rounded-br-lg">
    <h2 class="text-xl font-medium py-4">Your Booking</h2>
    <form>
      <div class="column-wrapper flex rounded-lg gap-1">
        <div class="column checkin p-3 uppercase font-medium">
          <label class="font-medium"
            >Check-In
            <input type="date" />
          </label>
        </div>
        <div class="column checkout p-3 uppercase">
          <label class="font-medium"
            >Check-Out
            <input type="date" />
          </label>
        </div>
      </div>
    </form>

    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
    <p>
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum.
    </p>
  </div>
</template>

<styles lang="scss" scoped>
.booking-bar {
  border-left: 1px solid var(--colors--grey-light);
  border-bottom: 1px solid var(--colors--grey-light);
}

.column-wrapper {
  border: 1px solid var(--colors--grey-light);
}

.checkout {
  border-left: 1px solid var(--colors--grey-light);
}
</styles>
