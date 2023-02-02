<template>
    <div>
      <div class="relative">
        <img alt="background-banner" class="object-cover h-60 w-full" src="~/assets/img/banner.png"/>
        <h1 class="absolute text-center text-5xl text-pomelo-red font-extrabold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Jetzt abstimmen!</h1>
      </div>
      <div>
        <NuxtLink class="btn" to="/polls/create">Abstimmung erstellen</NuxtLink>
      </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>