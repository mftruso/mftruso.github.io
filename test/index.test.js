import {createLocalVue, mount, shallowMount} from "@vue/test-utils"
import index from "@/pages/index"
import vuetify from "vuetify"

describe('index', () => {
    let wrapper;
    
    beforeEach(()=>{
        const localVue = createLocalVue()
        localVue.use(vuetify)
    
        wrapper = shallowMount(index, {
          localVue
        });
      })

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })
})