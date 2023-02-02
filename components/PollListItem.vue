<template>
  <article class="bg-white border-4 border-pomelo-red p-3 w-auto">
    <div class="mb-3 flex flex-row justify-between">
      <div class="basis-11/12">
        <img
            class="inline-block rounded-full bg-slate-300 w-10 h-10"
            src="https://api.dicebear.com/5.x/micah/svg?seed=Peter&mouth=pucker,laughing,smile&size=64"
            alt="Avatar of poll creator"
        />
        <h5 class="inline-block ml-2 text-lg font-semibold align-middle">Neues Feature</h5>
      </div>

      <Icon :class="['basis-10', 'h-10', 'text-green-400']" name="bi:circle-fill" :size="'5em'" />
    </div>

    <p class="mb-3 truncate">Dies ist ein neues Feature, das wir brauchen. Bitte lasst es uns implementieren.</p>

    <span>endet am 31.12.2023</span>
  </article>
</template>

<script>

</script>

<style scoped>

</style>