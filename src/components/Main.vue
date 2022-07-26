<template>
  <div class="main">
    <h1>HTML</h1>
    <material />
    <material />
    <material />
  </div>
</template>

<script>
import Material from "@/components/Material";
export default {
  name: "Main",
  components: {Material}
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