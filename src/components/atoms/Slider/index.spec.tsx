import { fireEvent } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { mount } from 'enzyme'

import { RangeSlider } from '../../../index'

describe('RangeSliderComponent', () => {
  beforeAll(() => {})
  const onRangeChange = jest.fn()

  // Test if min and max props are passed correctly
  it('should render the min and max values correctly', () => {
    const wrapper = mount(<RangeSlider min={0} max={100} value={[0, 100]} onRangeChange={onRangeChange} />)
    expect(wrapper.props().min).toEqual(0)
    expect(wrapper.props().max).toEqual(100)
  })

  // Test if the onRangeChange prop is called correctly with react testing library
  it('should trigger onRangeChange when the value is changed', () => {
    const { getByTestId } = render(<RangeSlider min={0} max={100} value={[0, 100]} onRangeChange={onRangeChange} />)
    const slider = getByTestId('custom-range-slider').querySelector('input')
    fireEvent.change(slider as Element, { target: { value: [0, 50] } })
    expect(onRangeChange).toHaveBeenCalled()
  })

  // Test if the marks are rendered correctly
  it('should render the marks correctly', () => {
    const wrapper = mount(<RangeSlider min={-10} max={100} value={[0, 100]} onRangeChange={onRangeChange} />)
    expect(wrapper.find('.MuiSlider-markLabel').first().text()).toEqual('-10')
    expect(wrapper.find('.MuiSlider-markLabel').last().text()).toEqual('100')
  })

  // Test if the slider is render with 1 thumb
  it('should render the slider with 1 thumb correctly', () => {
    const wrapper = mount(<RangeSlider min={0} max={100} value={50} onRangeChange={onRangeChange} />)
    expect(wrapper.find('.MuiSlider-valueLabelCircle').length).toEqual(1)
  })

  // Test if the slider is render with 2 thumbs
  it('should render the slider with 2 thumbs correctly', () => {
    const wrapper = mount(<RangeSlider min={0} max={100} value={[0, 100]} onRangeChange={onRangeChange} />)
    expect(wrapper.find('.MuiSlider-valueLabelCircle').length).toEqual(2)
  })

  // Test if the slider is inverted
  it('should render the slider inverted correctly', () => {
    const wrapper = mount(<RangeSlider min={0} max={100} value={[100, 0]} onRangeChange={onRangeChange} />)
    expect(wrapper.find('.MuiSlider-valueLabelCircle').first().text()).toEqual('0')
    expect(wrapper.find('.MuiSlider-valueLabelCircle').last().text()).toEqual('100')
  })
})
