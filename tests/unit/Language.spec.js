import { shallowMount, createLocalVue } from '@vue/test-utils'
import Language from '@/components/Language.vue'
import Vuex from "vuex";
import languages from "@/assets/js/languages";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
   state: {
       currentLanguageId: 1
   }
});

function getWrapperWithLanguage(isCurrent) {
    return shallowMount(Language, {
        store,
        localVue,
        propsData: {
            language: languages.find(lang => isCurrent ?
                lang.id === store.state.currentLanguageId :
                lang.id !== store.state.currentLanguageId),
        }
    });
}

describe('Language.vue', () => {
    it('current Language 일 때 fontWeight: bold 속성을 가진다.', () => {
        const wrapper = getWrapperWithLanguage(true);

        expect(wrapper.get('.item').attributes().style)
            .toBe("font-weight: bold;")
        expect(wrapper.get('span').text())
            .toBe(languages[0].name);
        expect(wrapper.get('img').attributes().src)
            .toBe(languages[0].icon);
    })

    it('current Language 가 아닐때 fontWeight: bold 속성을 가지지 않는다.', () => {
        const wrapper = getWrapperWithLanguage(false);

        expect(wrapper.get('.item').attributes().style)
            .toBeUndefined();
    })
})
