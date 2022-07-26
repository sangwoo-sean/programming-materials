<template>
  <div class="sidebar">
    <search-area />
    <language-list />
  </div>
</template>

<script>
import SearchArea from "@/components/SearchArea";
import LanguageList from "@/components/LanguageList";
export default {
  name: "Sidebar",
  components: {LanguageList, SearchArea}
}
</script>

<style scoped>
.sidebar {
  min-width: 330px;
  background: var(--main-color-1);
  border-right: solid 1px var(--main-color-5);
}
</style>