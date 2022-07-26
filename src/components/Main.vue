<template>
  <div class="container">
    <h1>Title</h1>
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
.container {
  flex: 1;
}
</style>