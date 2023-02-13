<template>
  <h1 class="majorTxt m-4">Über das Projekt</h1>
  <p class="text-gray-400 m-4">Halfway ist als Projekt für Software Engennering 2 an der HWR entstanden. Dabei war uns
    wichtig ein Projekt zu finden welches auch über den Kurs hinaus bestehen bleibt. Deswegen haben wir nach Problemen
    gesucht, die wir im Team haben und angehen können. Dabei brachte Martin auf, das er für das OpenSource Projekt
    foodsharing.de
    entwickelt und ihm dort eine Funktion zur Handhabung von Verbesserungsvorschlägen an der Website fehlt. Deswegen
    haben
    wir beschlossen ein solches Feature entwickeln.</p>

  <p class="text-gray-400 m-4">POLLmelo ermöglicht es, dass aus der Commuity Verbesserungsvorschläge eingereicht werden
    können und diese auch dann auch von der Community gevoted werden. Da die Entwicklungszeit für foodsharing.de
    begrenzt
    ist können die Entwickler/innen durch diese Votes aus der Community entscheiden, welche Verbeserungen prioritiesiert
    umgesetzt werden.</p>

  <div class="flex justify-center gap-4 m-4 items-center">
    <div class="text-gray-400">
      Schau dir den Quellcode für POLLmelo auf unserer Github-Seite an:
    </div>
    <div>
      <NuxtLink to="https://github.com/pollmelo"><img alt="GitHub" height="48" src="~/assets/img/github-mark.png"
                                                      width="48"></NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutText"
}
</script>

<style scoped>

</style>