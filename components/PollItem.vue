<template>
    <br>
    <div class="px-2">
        <div class="flex flex-wrap -mx-2">
            <div class="w-1/4">
            </div>
            <div class="w-1/2 flex-none">
                <div class="container flex-wrap items-center bg-pomelo-grey w-1/4 p-6 min-w-fit">
                    <div class="font-bold w-full p-2 bg-white border-2 border-pomelo-red">
                      {{ this.name }}
                    </div>
                    <div class="h-60 mt-2 w-full p-2 bg-white border-2 border-pomelo-red">
                        {{this.description}}
                    </div>
                    <div class="flex flex-row pt-10">
                        <div class="flex-col w-1/5 mr-auto bg-white p-2">
                            endet am: {{ new Date(this.endDate).toLocaleDateString(undefined, this.displayedDateOptions) }}
                        </div>
                        <div class="flex-col">
                            <Icon :class="['text-green-900', 'hover:text-green-700']" :name="'bi:hand-thumbs-up-fill'" @click="addUpvote"
                                :size="'2em'" />
                            <label class="text-center">{{this.upvotes}}</label>
                        </div>
                        <div class="flex-col px-10">
                            <Icon :class="['text-red-900', 'hover:text-red-700']" :name="'bi:hand-thumbs-down-fill'" @click="addDownvote"
                                :size="'2em'" />
                            <label class="text-center">{{ this.downvotes }}</label>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="w-1/4">
            </div>
        </div>
    </div>
</template>

<script>

export default {
  props: ['id', 'name', 'description', 'endDate', 'upvoteCount', 'downvoteCount'],

  mounted() {
    this.upvotes = this.upvoteCount
    this.downvotes = this.downvoteCount
  },

  data() {
    return {
      timestampFromNow: Date.now(),
      timestampOfEndDate: Date.parse(this.endDate),
      upvotes: 0,
      downvotes: 0,
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
    async addUpvote() {
      this.upvotes += 1
      await this.upvote()
    },

    async addDownvote() {
      this.downvotes += 1
      await this.downvote()
    },

    async upvote() {
      await useFetch(() => `https://backberry.ddev.site/api/votes/create`, {
        method: 'POST', 
        initialCache: false,
        body: {pollId: this.id, description: 1},
      })
    },

    async downvote() {
      await useFetch(() => `https://backberry.ddev.site/api/votes/create`, {
        method: 'POST', 
        initialCache: false,
        body: {pollId: this.id, description: 0},
      })
    },
  }
}
</script>

<style scoped>

</style>