import { Story } from '@storybook/react'

import { ProgressBar, ProgressBarProps } from './index'

const Template: Story<ProgressBarProps> = args => <ProgressBar {...args} />

export const Default = Template.bind({})
Default.args = {
  percentage: 30,
}

export const RoundedWithCustomColors = Template.bind({})
RoundedWithCustomColors.args = {
  percentage: 60,
  rounded: true,
  barColor: '#85c6ff',
  fillerColor: '#066fcd',
}

export default {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
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
