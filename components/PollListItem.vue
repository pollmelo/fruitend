<template>
  <article class="bg-white border-4 border-pomelo-red p-3 w-auto">
    <div class="mb-3 flex flex-row justify-between">
      <div class="basis-11/12">
        <img
            class="inline-block rounded-full bg-slate-300 w-10 h-10"
            :src="pollCreatorAvatarUrl"
            alt="Avatar of poll creator"
        />
        <h5
            class="inline-block ml-2 text-lg font-semibold align-middle hover:cursor-pointer"
            @click="goToPoll"
        >
          {{ this.name }}
        </h5>
      </div>

      <Icon :class="['basis-10', 'h-10', this.trafficLightColor]" name="bi:circle-fill" :size="'5em'" />
    </div>

    <p class="mb-3 truncate">{{ this.description }}</p>

    <div class="flex flex-row justify-between">
      <div class="basis-11/12">
        <span>{{ endDatePrefix }} am {{ new Date(this.endDate).toLocaleDateString(undefined, this.displayedDateOptions) }}</span>
      </div>

      <div class="basis-10 flex flex-row justify-between">
        <div class="flex flex-col">
          <Icon :class="['text-green-900', 'hover:text-green-700']" :name="'bi:hand-thumbs-up-fill'" :size="'2em'" />
          <label class="text-center">{{ this.upvoteCount }}</label>
        </div>
        <div class="flex flex-col">
          <Icon :class="['text-red-900', 'hover:text-red-700']" :name="'bi:hand-thumbs-down-fill'" :size="'2em'" />
          <label class="text-center">{{ this.downvoteCount }}</label>
        </div>
      </div>
    </div>

  </article>
</template>

<script>
  export default {
    props: ['id', 'name', 'description', 'endDate', 'upvoteCount', 'downvoteCount'],

    data() {
      return {
        timestampFromNow: Date.now(),
        timestampOfEndDate: Date.parse(this.endDate),
        displayedDateOptions: {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        },
      }
    },

    computed: {
      urlToPoll() {
        return `/polls/${this.id}`;
      },

      isVotable() {
        return this.timestampOfEndDate > this.timestampFromNow;
      },

      endDatePrefix() {
        return this.isVotable ? 'endet' : 'endete';
      },

      pollCreatorAvatarUrl() {
        return `https://api.dicebear.com/5.x/micah/svg?seed=${this.id}&mouth=pucker,laughing,smile&size=64`;
      },

      trafficLightColor() {
        return this.isVotable ? 'text-green-500' : 'text-red-500';
      },
    },

    methods: {
      async goToPoll() {
        await navigateTo(this.urlToPoll);
      },
    },
  }
</script>

<style scoped>

</style>