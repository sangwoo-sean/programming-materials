<template>
  <div class="material">
    <h4>유튜브(매체이름)</h4>
    <material-item />
    <material-item />
    <material-item />
    <material-item />
  </div>
</template>

<script>
import MaterialItem from "@/components/MaterialItem";
export default {
  name: "Material",
  components: {MaterialItem}
}
</script>

<style scoped>
.material {
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>