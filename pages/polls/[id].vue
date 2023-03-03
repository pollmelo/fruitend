<template>
    <div>
      <PollItem
          v-if="poll" :id=poll.id :name=poll.name :description=poll.description :end-date=poll.endDate
          :upvote-count=poll.upvotes :downvote-count=poll.downvotes
      />
    </div>  
</template>

<script setup>
import { nextTick } from 'vue'
await nextTick()
</script>

<script>
export default {
  beforeMount() {
    this.fetchPoll().then((result) => {
      this.poll = result;
    });
  },

  data() {
    return {
      poll: undefined,
    }
  },

  methods: {
    async fetchPoll() {
      const pollId = useRoute().params.id;
      const poll = await useFetch( () => `https://backberry.ddev.site/api/polls/${pollId}`, {
        method: 'get',
        initialCache: false,
      });
      return poll.data;
    }
  }
}
</script>

<script>
export default {
  beforeMount() {
    this.fetchPoll().then((result) => {
      this.poll = result;
      console.log(result)
document.title = 'POLLmelo - ' + (result.value ? result.value.name : "");
    });
  },

  data() {
    return {
      poll: undefined,
    }
  },

  methods: {
    async fetchPoll() {
      const pollId = useRoute().params.id;
      const poll = await useFetch( () => `https://backberry.ddev.site/api/polls/${pollId}`, {
        method: 'get',
        initialCache: false,
      });
      return poll.data;
    }
  }
}
</script>

<style scoped>

</style>