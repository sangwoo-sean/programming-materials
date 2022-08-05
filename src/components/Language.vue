<template>
  <div class="item" :style="ifActiveBold">
    <img :src="language.icon" alt="i" width="20" height="20">
    <span>{{ language.name }}</span>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    language: {
      type: Object
    },
  },
  computed: {
    currentLanguageId() {
      return this.$store.state.currentLanguageId;
    },
    ifActiveBold() {
      if (Number(this.currentLanguageId) === Number(this.language.id))
        return {fontWeight: 'bold'};
      return '';
    }
  },
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