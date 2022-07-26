<template>
  <div class="search-area">
    <div class="search-bar">
      <img src="@/assets/search-icon.svg" alt="i">
      <input type="text" placeholder="검색어를 입력하세요">
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchArea"
}
</script>

<style scoped>
.search-area {
  background: var(--main-color-3);
  padding: 6px 10px;
}
.search-bar {
  background: white;
  width: 100%;
  border-radius: 5px;
  border: solid 1px var(--main-color-5);
  display: flex;
  align-items: center;
}
img {
  margin: 5px;
}
input {
  all: unset;
  padding: 4px 0;
  font-size: 14px;
}
</style>