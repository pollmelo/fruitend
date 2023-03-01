<template>
  <form class="mx-auto">
    <div class="container items-center bg-pomelo-grey w-1/4 p-6 mx-auto">
      <input
          v-model="name"
          id="name"
          class="txtField h-10 mt-2 font-bold w-full p-2"
          placeholder="*Titel eingeben"
          type="text"
          minlength="5" maxlength="80"
          required>
      <br>
      <textarea
          v-model="description"
          id="description"
          class="txtField h-60 mt-2 w-full px-2"
          placeholder="*Beschreibung"
          minlength="80" maxlength="500"
          rows="10"
          required></textarea>
      <br>
      <input
          v-model="endDate"
          id="endDate"
          class="txtField h-10 w-45"
          type="date"
          required>
    </div>
    <div class="container text-right w-1/4 mx-auto">
      <NuxtLink class="minorBtn mx-3" to="/">Abbrechen</NuxtLink>
      <button
          class="majorBtn mt-5"
          type="submit"
          @click.prevent="submit"
      >
        Veröffentlichen
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        name: "",
        description: "",
        endDate: "",
      }
    },

    methods: {
      submit: async function () {
        const {data, error} = await useFetch('https://backberry.ddev.site/api/polls/create', {
          method: 'post',
          body: {name: this.name, description: this.description, endDate: this.endDate},
        })

        if (data) {
          console.log(data)
          await navigateTo(`/polls/${data.value.id}`)
        }

        if (error) {
          console.error(error)
        }
      }
    }
  }
</script>

<style scoped>

</style>