<template>
  <div class="material-item">
    <div class="upvote-count">122</div>
    <div class="upvote">
      <img src="@/assets/upvote-icon-filled.svg" alt="i">
    </div>
    <div class="name">
      <a href="#">
        <h5>생활코딩</h5>
      </a>
    </div>
    <div class="badges">
      <Badge v-for="idx in 3" :key="idx"/>
    </div>
  </div>
</template>

<script>
import Badge from "@/components/Badge";

export default {
  name: "MaterialItem",
  components: {Badge}
}
</script>

<style scoped>
.material-item {
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 10px;
}
.badges {
  margin-left: 10px;
  display: flex;
  align-items: center;
  gap: 4px;
}
.name {
  margin-left: 10px;
}
.upvote-count {
  margin-left: 10px;
  margin-right: 4px;
  text-align: right;
  width: 36px;
}
.upvote {
  transform: scale(1, 1);
  transition: all ease-in-out 200ms;
}
.upvote:hover {
  cursor: pointer;
  transform: scale(1.4, 1.4);
  transition: all ease-in-out 200ms;
}
img {
  margin: auto;
}
a {
  all: unset;
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
</style>