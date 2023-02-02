<template>
  <article class="bg-white border-4 border-pomelo-red p-3 w-auto">
    <div class="mb-3 flex flex-row justify-between">
      <div class="basis-11/12">
        <img
            class="inline-block rounded-full bg-slate-300 w-10 h-10"
            :src="pollCreatorAvatarUrl"
            alt="Avatar of poll creator"
        />
        <h5 class="inline-block ml-2 text-lg font-semibold align-middle">{{ this.title }}</h5>
      </div>

      <Icon :class="['basis-10', 'h-10', this.trafficLightColor]" name="bi:circle-fill" :size="'5em'" />
    </div>

    <p class="mb-3 truncate">{{ this.description }}</p>

    <span>endet am {{ new Date(this.endDate).toLocaleDateString() }}</span>
  </article>
</template>

<script>
  export default {
    props: ['id', 'title', 'description', 'endDate'],

    data() {
      return {
        timestampFromNow: Date.now(),
        timestampOfEndDate: Date.parse(this.endDate),
      }
    },

    computed: {
      isVotable() {
        return this.timestampOfEndDate > this.timestampFromNow;
      },

      pollCreatorAvatarUrl() {
        return `https://api.dicebear.com/5.x/micah/svg?seed=${this.id}&mouth=pucker,laughing,smile&size=64`;
      },

      trafficLightColor() {
        return this.isVotable ? 'text-green-500' : 'text-red-500';
      }
    }
  }
</script>

<style scoped>

</style>