import { shallowMount, createLocalVue } from '@vue/test-utils'
import LanguageList from '@/components/LanguageList.vue'
import Vuex from "vuex";
import languages from "@/assets/js/languages";

const localVue = createLocalVue();
localVue.use(Vuex);

function getStoreWithQuery(query) {
    return new Vuex.Store({
        state: {
            query,
            languages
        }
    });
}

function getWrapperWithQuery(query) {
    return shallowMount(LanguageList, {
        store: getStoreWithQuery(query),
        localVue
    });
}

describe('Language.vue', () => {

    it('query 가 없는 최초 상태일때 모든 아이템을 보여준다.', () => {
        const wrapper = getWrapperWithQuery('');

        expect(wrapper.findAll('[data-id]').length)
            .toBe(languages.length);
    })

    it('query 가 " " 일때 모든 아이템을 보여준다.', () => {
        const wrapper = getWrapperWithQuery(' ');

        expect(wrapper.findAll('[data-id]').length)
            .toBe(languages.length);
    })

    it('query 가 "h" 일때 HTML 을 보여준다', () => {
        const wrapper = getWrapperWithQuery('h');

        const HTML = languages.find(lang => lang.name === 'HTML');
        expect(wrapper.find(`[data-id='${HTML.id}']`).exists())
            .toBeTruthy();
    })

    it('query 가 "h" 일때 Vue 를 보여주지 않는다', () => {
        const wrapper = getWrapperWithQuery('h');

        const Vue = languages.find(lang => lang.name === 'Vue');
        expect(wrapper.find(`[data-id='${Vue.id}']`).exists())
            .toBeFalsy();
    })

    it('query 가 "java" 일때 Java 와 JavaScript 를 보여준다', () => {
        const wrapper = getWrapperWithQuery('java');

        const Java = languages.find(lang => lang.name === 'Java');
        expect(wrapper.find(`[data-id='${Java.id}']`).exists())
            .toBeTruthy();

        const JavaScript = languages.find(lang => lang.name === 'JavaScript');
        expect(wrapper.find(`[data-id='${JavaScript.id}']`).exists())
            .toBeTruthy();
    })

    it('query 가 "JAVA" 일때 Java 와 JavaScript 를 보여준다', () => {
        const wrapper = getWrapperWithQuery('JAVA');

        const Java = languages.find(lang => lang.name === 'Java');
        expect(wrapper.find(`[data-id='${Java.id}']`).exists())
            .toBeTruthy();

        const JavaScript = languages.find(lang => lang.name === 'JavaScript');
        expect(wrapper.find(`[data-id='${JavaScript.id}']`).exists())
            .toBeTruthy();
    })
})
