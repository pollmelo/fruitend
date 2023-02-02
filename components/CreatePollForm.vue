<template>
  <form class="mx-auto">
    <div class="container items-center bg-pomelo-grey w-1/4 p-6 mx-auto">
      <input
          id="name"
          class="txtField h-10 mt-2 font-bold w-full"
          placeholder="*Titel eingeben"
          type="text"
          minlength="5" maxlength="80"
          required>
      <br>
      <textarea
          id="description"
          class="txtField h-60 mt-2 w-full"
          placeholder="*Beschreibung"
          minlength="80" maxlength="500"
          rows="10"
          required></textarea>
      <br>
      <input
          id="endDate"
          class="txtField h-10 w-28"
          type="date"
          required>
    </div>
    <div class="container text-right w-1/4 mx-auto">
      <button
          class="btn mt-5"
          type="submit">
        Veröffentlichen
      </button>
    </div>
  </form>
</template>

<script>
</script>

<style scoped>

</style>