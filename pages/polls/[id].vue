<template>
    <div>
      <PollItem
          :id=poll.id :name=poll.name :description=poll.description :end-date=poll.endDate
          :upvote-count=poll.upvotes :downvote-count=poll.downvotes
      />
    </div>
</template>

<script setup>

</script>

<script>
export default {
  beforeMount() {
    this.fetchPoll();
  },

  data() {
    return {
      poll: [],
    }
  },

  methods: {
    async fetchPoll() {
      const poll = await useFetch('https://backberry.ddev.site/api/polls/14');
      this.poll = poll.data;
    }
  }
}
</script>

<style scoped>

</style>