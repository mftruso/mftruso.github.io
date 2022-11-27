import { describe, test, beforeEach, expect, shallowMount } from 'vitest'
import ArticleCard from '~/components/ArticleCard'

describe('ArticleCard', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(ArticleCard, {
      localVue,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      propsData: { article: { title: 'Cool Project', description: 'I learned a lot', slug: 'cool', link: 'https://github.com' } }
    })
  })

  test('Matches Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
    const buttons = wrapper.findAll('v-btn-stub')
    const link = wrapper.findComponent(RouterLinkStub)
    expect(buttons).toHaveLength(2)
    expect(link).toBeTruthy()
  })
})
