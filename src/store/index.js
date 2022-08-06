import Vue from 'vue'
import Vuex from 'vuex'
import languages from "@/assets/js/languages";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    languages,
    currentLanguageId: 1,
    query: ''
  },
  getters: {
    currentLanguage(state) {
      return languages.find(l => l.id === state.currentLanguageId);
    }
  },
  mutations: {
    setCurrentLanguageId(state, id) {
      state.currentLanguageId = Number(id);
    },
    setQuery(state, query) {
      state.query = query;
    }
  },
  actions: {
  },
  modules: {
  }
})
