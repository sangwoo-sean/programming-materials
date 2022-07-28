<template>
  <div class="main">
    <h1>{{ currentLanguage.name }}</h1>
    <material v-for="(material, idx) in currentLanguage.materials" :key="idx"
              :material="material"
    />
  </div>
</template>

<script>
import Material from "@/components/Material";
export default {
  name: "Main",
  components: {Material},
  computed: {
    currentLanguage() {
      return this.$store.getters.currentLanguage;
    }
  },
}
</script>

<style scoped>
.main {
  flex: 1;
  padding: 20px;
}
h1 {
  margin-bottom: 20px;
}
</style>