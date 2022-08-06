import { shallowMount } from '@vue/test-utils'
import Material from "@/components/Material";
import BADGES from "@/assets/js/badges";
import MaterialItem from "@/components/MaterialItem";

const material = {
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
};

describe('Material.vue', () => {
    const wrapper = shallowMount(Material, {
        propsData: {
            material
        }
    });

    it('material 이름이 출력된다.', () => {
        expect(wrapper.get('h4').text())
            .toBe(material.name);
    })

    it('material 이 2개일 때 2개의 material-item 이 렌더링 된다.', () => {
        expect(wrapper.findAllComponents(MaterialItem).length)
            .toBe(2);
    })
});
