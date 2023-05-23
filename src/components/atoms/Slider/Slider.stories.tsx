import { Meta, StoryObj } from '@storybook/react'
import * as React from 'react'

import { RangeSlider } from './index'
import { BASE_COLORS } from '../../../themes/BaseColors'

const SliderExample = props => {
  const [amountValue, setAmountValue] = React.useState<number | number[]>(props.value)
  const sx = {
    width: '80%',
    p: 5,
  }

  return (
    <RangeSlider
      {...props}
      sx={sx}
      value={amountValue}
      onRangeChange={(event, newValue) => setAmountValue(newValue as number[])}
    />
  )
}

const meta: Meta<typeof SliderExample> = {
  title: 'atoms/RangeSlider',
  component: SliderExample,
}

export default meta
type Story = StoryObj<typeof SliderExample>

export const Basic: Story = {
  render: () => (
    <SliderExample
      min={-50}
      max={100}
      value={[20, 37]}
      barColor={BASE_COLORS.COLOR_RED_800}
      fillerColor={BASE_COLORS.COLOR_GREEN_500}
    />
  ),
}

export const With1Limits: Story = {
  render: () => (
    <SliderExample
      min={-50}
      max={100}
      value={20}
      barColor={BASE_COLORS.COLOR_RED_800}
      fillerColor={BASE_COLORS.COLOR_GREEN_500}
    />
  ),
}

export const InvertedSlider: Story = {
  render: () => (
    <SliderExample
      min={-50}
      max={100}
      value={20}
      barColor={BASE_COLORS.COLOR_RED_800}
      fillerColor={BASE_COLORS.COLOR_GREEN_500}
      track="inverted"
    />
  ),
}
