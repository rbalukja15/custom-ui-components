import { Story } from '@storybook/react'

import { RangeSlider, RangeSliderProps } from './index'

const Template: Story<RangeSliderProps> = args => <RangeSlider {...args} />

export const Default = Template.bind({})
Default.args = {
  percentage: 30,
  barColor: '#85c6ff',
  fillerColor: '#066fcd',
}

export default {
  title: 'Atoms/RangeSlider',
  component: RangeSlider,
  argTypes: {
    barColor: {
      control: {
        type: 'color',
      },
    },
    fillerColor: {
      control: {
        type: 'color',
      },
    },
  },
}
