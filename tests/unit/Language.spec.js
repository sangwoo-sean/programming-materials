import { shallowMount, createLocalVue } from '@vue/test-utils'
import Language from '@/components/Language.vue'
import Vuex from "vuex";
import BADGES from "@/assets/js/badges";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
   state: {
       currentLanguageId: 1
   }
});
const language1 = {
    id: 1,
    name: 'HTML',
    icon: require('@/assets/html.svg'),
    materials: [
        {
            name: '유튜브',
            contents: [
                {
                    name: '생활코딩 - WEB1- HTML & Internet',
                    upvoteCount: 0,
                    link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMDZP7FJ_ZsUrdCGH68ppvPb',
                    badges: []
                },
            ]
        },
    ]
};
const language2 = {
    id: 2,
    name: 'CSS',
    icon: require('@/assets/css.svg'),
    materials: [
        {
            name: '유튜브',
            contents: [
                {
                    name: '생활코딩 - WEB2-CSS',
                    upvoteCount: 0,
                    link: 'https://www.youtube.com/playlist?list=PLuHgQVnccGMAnWgUYiAW2cTzSBywFO75B',
                    badges: []
                },
                {
                    name: 'Online Tutorials',
                    upvoteCount: 0,
                    link: 'https://www.youtube.com/c/OnlineTutorials4Designers/videos',
                    badges: [BADGES.ENGLISH]
                },
            ]
        }
    ]
};

describe('Language.vue', () => {
    it('current Language 일 때 fontWeight: bold 속성을 가진다.', () => {
        const wrapper = shallowMount(Language, {
            store,
            localVue,
            propsData: {
                language: language1,
            }
        })

        expect(wrapper.get('.item').attributes().style)
            .toBe("font-weight: bold;")
        expect(wrapper.get('span').text())
            .toBe(language1.name);
        expect(wrapper.get('img').attributes().src)
            .toBe(language1.icon);
    })

    it('current Language 가 아닐때 fontWeight: bold 속성을 가지지 않는다.', () => {
        const wrapper = shallowMount(Language, {
            store,
            localVue,
            propsData: {
                language: language2,
            }
        })

        expect(wrapper.get('.item').attributes().style)
            .toBeUndefined();
        expect(wrapper.get('span').text())
            .toBe(language2.name);
        expect(wrapper.get('img').attributes().src)
            .toBe(language2.icon);
    })
})
