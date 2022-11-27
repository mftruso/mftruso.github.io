import { describe, test, beforeEach, expect, shallowMount } from 'vitest'
import index from '@/pages/index'

describe('index', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(index)
  })

  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('Matches Snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
