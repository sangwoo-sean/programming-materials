<template>
  <div class="material-item">
    <div class="upvote-count">{{ content.upvoteCount }}</div>
    <div class="upvote">
      <img src="@/assets/upvote-icon-filled.svg" alt="i">
    </div>
    <div class="name">
      <a :href="content.link" target="_blank">
        <h5>{{ content.name }}</h5>
      </a>
    </div>
    <div class="badges">
      <Badge v-for="(badge, idx) in content.badges" :key="idx"
             :badge="badge"
      />
    </div>
  </div>
</template>

<script>
import Badge from "@/components/Badge";

export default {
  name: "MaterialItem",
  components: {Badge},
  props: {
    content: {
      type: Object,
    },
  },
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