import { createLocalVue, shallowMount } from '@vue/test-utils'
import index from '@/pages/index'

describe('index', () => {
  const localVue = createLocalVue()
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(index, {
      localVue
    })
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('Matches Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
