<template>
  <div class="container mx-auto">
    <AboutText/>

    <hr class="bg-pomelo-grey h-0.5 mx-4">

    <AboutTeam/>
  </div>
</template>

<script setup>
</script>

<script>
export default {
  beforeMount () {
    document.title = "POLLmelo - About"
  }
}
</script>

<style scoped>

</style>