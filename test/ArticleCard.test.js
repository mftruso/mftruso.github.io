import { describe, test, beforeEach, expect } from 'vitest'
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import ArticleCard from '@/components/ArticleCard.vue'

describe('ArticleCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ArticleCard, {
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: { article: { title: 'Cool Project', description: 'I learned a lot', _path: 'cool', link: 'https://github.com' } }
    })
  })

  test('Matches Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
    const buttons = wrapper.findAll('v-btn')
    const link = wrapper.findComponent('nuxtlink')
    expect(buttons).toHaveLength(2)
    expect(link).toBeTruthy()
  })
})
