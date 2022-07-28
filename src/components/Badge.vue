<template>
  <div class="badge" :style="getBadgeColor">
    {{ badge.name }}
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    badge: {
      type: Object,
    },
  },
  computed: {
    getBadgeColor() {
      return {background: this.badge.color};
    }
  },
}
</script>

<style scoped>
.badge {
  background: #546e7a;
  padding: 2px 5px 3px;
  border-radius: 10px;
  color: white;
  font-size: 14px;
}
</style>
<!--
#546e7a
#757575
#8d6e63
#827717
#33691e
#2e7d32
#00796b
#00838f
#0277bd
#1976d2
#5c6bc0
#7e57c2
#ab47bc
#d81b60
#d32f2f
-->