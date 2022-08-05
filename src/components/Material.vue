<template>
  <div class="material">
    <h4>
      {{ material.name }}
    </h4>
    <material-item v-for="(content, idx) in material.contents" :key="idx"
                   :content="content"
    />
  </div>
</template>

<script>
import MaterialItem from "@/components/MaterialItem";
export default {
  name: "Material",
  components: {MaterialItem},
  props: {
    material: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.material {
  margin-top: 10px;
  margin-bottom: 20px;
}
h4 {
  margin-bottom: 10px;
}
</style>