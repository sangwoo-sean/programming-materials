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
      const query = this.$store.state.query.toLowerCase();
      const languages = this.$store.state.languages;

      if (query.trim().length === 0)
        return this.$store.state.languages;

      return languages.filter(lang => lang.name.toLowerCase().includes(query));
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