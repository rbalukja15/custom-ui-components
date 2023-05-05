import { storiesOf } from '@storybook/react'
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

storiesOf('atoms/RangeSlider', module)
  .add('Slider with 2 limits', () => (
    <SliderExample
      min={-50}
      max={100}
      value={[20, 37]}
      barColor={BASE_COLORS.COLOR_RED_800}
      fillerColor={BASE_COLORS.COLOR_GREEN_500}
    />
  ))
  .add('Slider with 1 limit', () => (
    <SliderExample
      min={-50}
      max={100}
      value={20}
      barColor={BASE_COLORS.COLOR_RED_800}
      fillerColor={BASE_COLORS.COLOR_GREEN_500}
    />
  ))
  .add('Slider inverted track', () => (
    <SliderExample
      min={-50}
      max={100}
      value={20}
      barColor={BASE_COLORS.COLOR_RED_800}
      fillerColor={BASE_COLORS.COLOR_GREEN_500}
      track="inverted"
    />
  ))
