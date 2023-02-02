<template>
    <div>
      <form class="container mx-auto">

        <input
            id="name"
            class="bg-white border-2 border-[#E95829] w-full py-2 px-4"
            type="text" placeholder="*Titel eingeben" required>

        <input
            id="description"
            class="bg-white border-2 border-[#E95829] w-full py-2 px-4 h-40"
            type="text" placeholder="*Beschreibung" required>
        <button
            class="submit mx-auto"
            type="button">
          Veröffentlichen
        </button>
      </form>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>