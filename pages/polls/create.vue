<template>
    <div>
      <form class="w-full max-w-sm mx-auto">

        <input
            id="name"
            class="bg-gray-200 border-2 border-[#E95829] w-full py-2 px-4"
            type="text" value="*Titel eingeben" required>

        <input
            id="description"
            class="bg-gray-200 border-2 border-[#E95829] w-full py-2 px-4"
            type="text" value="*Beschreibung" required>
        <button
            class="submit"
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