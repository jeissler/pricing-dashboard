import { describe, it, expect, beforeEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import App from './App.vue'

describe('App', () => {
  let wrapper: VueWrapper<InstanceType<typeof App>>

  beforeEach(() => {
    const testApp = createApp(App)
    testApp.use(VueQueryPlugin)

    wrapper = mount(App, {
      global: {
        plugins: [VueQueryPlugin],
      },
    })
  })

  it('mounts renders properly', () => {
    expect(wrapper.text()).toContain('Pricing Dashboard')
  })
})
