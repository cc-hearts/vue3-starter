import InputFormatNumber from '@/components/input/input-format-number.vue'
import { expect, describe, test } from 'vitest'
import { mount } from '@vue/test-utils'

describe('InputFormatNumber components', () => {
  test('should format number with commas on prop change', async () => {
    const wrapper = mount(InputFormatNumber)
    await wrapper.setProps({ value: '123456' })
    const inputEl = wrapper.find('input')
    expect(inputEl.element.value).toBe('123,456')
  })

  test('should format number correctly when pasted', async () => {
    const wrapper = mount(InputFormatNumber)
    const inputEl = wrapper.find('input')

    await inputEl.setValue('123456.789')
    inputEl.element.dispatchEvent(
      new InputEvent('input', { inputType: 'insertFromPaste' }),
    )
    expect(inputEl.element.value).toBe('123,456.789')
  })

  test('should format number correctly when inputting additional digits', async () => {
    const wrapper = mount(InputFormatNumber)
    const inputEl = wrapper.find('input')

    await inputEl.setValue('123,456')
    inputEl.element.dispatchEvent(
      new InputEvent('input', { inputType: 'insertText', data: '123,4567' }),
    )
    expect(inputEl.element.value).toBe('1,234,567')
  })

  test('should format number correctly when deleting content', async () => {
    const wrapper = mount(InputFormatNumber, { props: { value: '123,456' } })
    const inputEl = wrapper.find('input')

    await inputEl.setValue('123,4')
    inputEl.element.dispatchEvent(
      new InputEvent('input', { inputType: 'deleteContentBackward' }),
    )
    expect(inputEl.element.value).toBe('1,234')

    await inputEl.setValue('123')
    inputEl.element.dispatchEvent(
      new InputEvent('input', { inputType: 'deleteSoftLineBackward' }),
    )
    expect(inputEl.element.value).toBe('123')
  })

  test('should format number correctly when cutting content', async () => {
    const wrapper = mount(InputFormatNumber, { props: { value: '123,456' } })
    const inputEl = wrapper.find('input')

    await inputEl.setValue('')
    inputEl.element.dispatchEvent(
      new InputEvent('input', { inputType: 'deleteByCut' }),
    )
    expect(inputEl.element.value).toBe('')
  })
})
