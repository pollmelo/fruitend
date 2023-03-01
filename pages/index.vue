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
          <Icon v-if="polls == null" :class="['animate-spin', 'text-pomelo-red']" :name="'bx:loader-circle'" :size="'5em'" />
          <PollListItem
              v-for="poll in polls.slice().reverse()" :key="poll.id" :class="['mb-3.5']"
              :id="poll.id" :name="poll.name" :description="poll.description" :end-date="poll.endDate"
              :upvote-count="poll.upvotes" :downvote-count="poll.downvotes"
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

  methods: {
    async fetchPolls() {
      const polls = await useFetch('https://backberry.ddev.site/api/polls/all');
      this.polls = Array.from(polls.data.value);
    }
  }
}
</script>

<style scoped>

</style>