<template>
  <PollListItem
      :id="123"
      :name="'Neue Features hinzufügeasdasdasdasdasdn'"
      :description="'Lasst uns neue Features erstellen, kann ja nicht so schwierig sein. ' +
       'Informatik ist doch nur wenn, dann xyz'"
      :end-date="'2023-02-01'"
      :upvote-count="50"
      :downvote-count="12"
  />
</template>

<script>
  definePageMeta({  layout: ""});
</script>

<style scoped>

</style>