import { Story } from '@storybook/react'

import { CustomizedMenuProps, CustomizedMenus } from './index'
import { categorizedStores } from '../Autocomplete/constants'

const Template: Story<CustomizedMenuProps> = args => {
  const { padding, options, groupKeys } = args

  return <CustomizedMenus options={options} padding={padding} groupKeys={groupKeys} />
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

export const Default = Template.bind({})
Default.args = {
  padding: 0,
  options: categorizedStores,
  groupKeys: ['General', 'Filialtyp', 'Verkaufsgebiet'],
}

export default {
  title: 'Atoms/CustomizedMenus',
  component: CustomizedMenus,
  argTypes: {
    padding: {
      defaultValue: 0,
      control: {
        type: 'number',
      },
    },
  },
}
