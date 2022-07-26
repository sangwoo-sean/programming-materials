<template>
  <div class="material-item">
    <div>추천수</div>
    <div>아이콘</div>
    <div>콘텐츠 이름</div>
    <div class="badges">
      <div>배지</div>
      <div>배지</div>
      <div>배지</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MaterialItem"
}
</script>

<style scoped>
.material-item {
  display: flex;
  align-items: center;
}
.badges {
  display: flex;
  align-items: center;
}
</style>