import InputFormatNumber from '@/components/input/input-format-number.vue'
import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'

describe('InputFormatNumber components', () => {
  test('format number', async () => {
    const wrapper = mount(InputFormatNumber)

    await wrapper.setProps({ value: '123456' })

    const inputEl = wrapper.find('input')

    expect(inputEl.element.value).toBe('123,456')
  })
})
