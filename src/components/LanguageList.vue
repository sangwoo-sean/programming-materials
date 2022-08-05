<template>
  <div>
    <Language v-for="language in languages" :key="language.id"
              :data-id="language.id"
              :language="language"
              @click.native="setCurrentLanguageId"/>
  </div>
</template>

<script>
import Language from "@/components/Language";

export default {
  name: "LanguageList",
  components: {Language},
  computed: {
    languages() {
      return this.$store.state.languages;
    }
  },
  methods: {
    setCurrentLanguageId(e) {
      const target = e.currentTarget.dataset.id;
      this.$store.commit('setCurrentLanguageId', target);
    }
  },
}
</script>

<style scoped>

</style>