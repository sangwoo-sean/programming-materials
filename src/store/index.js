import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*
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
* */
const BADGES = Object.freeze({
  ENGLISH: {
    name: '영어',
    color: '#546e7a'
  },
  SUBTITLE: {
    name: '자막',
    color: '#757575'
  },
  OFFICIAL: {
    name: '공식',
    color: '#8d6e63'
  }
});

const languages = [
  {
    id: 1,
    name: 'HTML',
    icon: require('@/assets/html.svg'),
    materials: [
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL, BADGES.SUBTITLE]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      },
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      },
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      },
    ]
  },
  {
    id: 2,
    name: 'CSS',
    icon: require('@/assets/html.svg'),
    materials: [
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      }
    ]
  },
  {
    id: 3,
    name: 'JavaScript',
    icon: require('@/assets/html.svg'),
    materials: [
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      }
    ]
  },
  {
    id: 4,
    name: 'Java',
    icon: require('@/assets/html.svg'),
    materials: [
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      }
    ]
  },
  {
    id: 5,
    name: 'MySQL',
    icon: require('@/assets/html.svg'),
    materials: [
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      }
    ]
  },
  {
    id: 6,
    name: 'Vue',
    icon: require('@/assets/html.svg'),
    materials: [
      {
        name: '유튜브',
        contents: [
          {
            name: '생활코딩',
            upvoteCount: 3,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '애플코딩',
            upvoteCount: 100,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
          {
            name: '조코딩',
            upvoteCount: 0,
            link: '#',
            badges: [BADGES.ENGLISH, BADGES.OFFICIAL]
          },
        ]
      }
    ]
  }
];

export default new Vuex.Store({
  state: {
    languages,
    currentLanguageId: 1
  },
  getters: {
    currentLanguage(state) {
      return languages.find(l => l.id === state.currentLanguageId);
    }
  },
  mutations: {
    setCurrentLanguageId(state, id) {
      state.currentLanguageId = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
