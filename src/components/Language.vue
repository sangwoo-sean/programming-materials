<template>
  <div class="item">
    <img src="@/assets/html.svg" alt="i" width="20">
    <span>HTML</span>
  </div>
</template>

<script>
export default {
  name: "Item"
}
</script>

<style scoped>
.item {
  display: flex;
  align-items: center;
  padding: 6px 10px;
}
.item:hover {
  background: var(--main-color-3);
}
span {
  margin-left: 8px;
}
</style>