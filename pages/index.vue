
<template>
  <div>
    <div class="relative">
      <img alt="background-banner" class="object-cover h-60 w-full" src="~/assets/img/banner.png"/>
      <h1 class="absolute text-center text-5xl text-pomelo-red font-extrabold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Jetzt abstimmen!</h1>
    </div>
    <div class="container py-10 mx-auto">
      <CreatePollButton/>

      <section class="mt-10">
        <Icon v-if="polls == null" :class="['animate-spin', 'text-pomelo-red']" :name="'bx:loader-circle'"
              :size="'5em'"/>
        <PollListItem

            v-if="polls" v-for="poll in sortedPolls" :id="poll.id" :key="poll.id"
            :class="['mb-3.5']" :description="poll.description" :downvote-count="poll.downvotes"
            :end-date="poll.endDate"
            :name="poll.name" :upvote-count="poll.upvotes"
        />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.fetchPolls();
    document.title = "POLLmelo"
  },
  
  data() {
    return {
      polls: null,
    }
  },
  
computed: {
    sortedPolls() {
      return this.polls.sort((a, b) => Date.parse(b.endDate) - Date.parse(a.endDate))
    }
  },

  methods: {
    async fetchPolls() {
      const polls = await useFetch('https://backberry.ddev.site/api/polls/all');
      this.polls = polls.data;
    }
  },
}
</script>

<style scoped>
</style>