<template>
  <div class="container">
    <search-area />
    <item-list />
  </div>
</template>

<script>
import SearchArea from "@/components/SearchArea";
import ItemList from "@/components/ItemList";
export default {
  name: "Sidebar",
  components: {ItemList, SearchArea}
}
</script>

<style scoped>
.container {
  min-width: 330px;
  background: var(--main-color-1);
  border-right: solid 1px var(--main-color-5);
}
</style>