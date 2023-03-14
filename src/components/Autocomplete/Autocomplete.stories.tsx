import { Story } from '@storybook/react'

import { RenderGroup, RenderGroupProps } from './index'

const Template: Story<RenderGroupProps> = args => <RenderGroup {...args} />

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export const Default = Template.bind({})
Default.args = {
  padding: 0,
}

export default {
  title: 'Atoms/RenderGroup',
  component: RenderGroup,
  argTypes: {
    padding: {
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
  },
}
