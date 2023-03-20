import { Story } from '@storybook/react'

import { CustomTable } from './index'
import { CustomTableDataProps, Data, HeadCell } from './types'

function createData(
  id: number,
  name: string,
  isActive: boolean,
  upperLimit: number,
  lowerLimit: number,
  flagReturns: boolean,
  flagSoldOuts: boolean,
  unit: string
): Data {
  return {
    id,
    name,
    isActive,
    upperLimit,
    lowerLimit,
    flagReturns,
    flagSoldOuts,
    unit,
  }
}

const rows = [
  createData(1, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(2, 'Cupcake', false, 3.7, 67, true, false, 'amount'),
  createData(3, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(4, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(5, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(6, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(7, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(8, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(9, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(10, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(11, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(12, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
  createData(13, 'Cupcake', true, 3.7, 67, true, false, 'amount'),
]

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'isActive',
    numeric: false,
    disablePadding: false,
    label: 'Active',
  },
  {
    id: 'upperLimit',
    numeric: true,
    disablePadding: false,
    label: 'Upper limit',
  },
  {
    id: 'lowerLimit',
    numeric: true,
    disablePadding: false,
    label: 'Lower limit',
  },
  {
    id: 'flagReturns',
    numeric: false,
    disablePadding: false,
    label: 'Flag returns',
  },
  {
    id: 'flagSoldOuts',
    numeric: false,
    disablePadding: false,
    label: 'Flag sold outs',
  },
  {
    id: 'unit',
    numeric: false,
    disablePadding: false,
    label: 'Unit',
  },
]

const onActionClick = (id: number) => {
  console.log(id)
}

const Template: Story<CustomTableDataProps> = args => {
  const { headCells, rows, title } = args

  return <CustomTable headCells={headCells} rows={rows} title={title} onActionClick={onActionClick} />
}

export const Default = Template.bind({})
Default.args = {
  headCells: headCells,
  rows: rows,
  title: 'Rules',
  onActionClick: onActionClick,
}

export default {
  title: 'Molecules/CustomizedMenus',
  component: CustomTable,
  argTypes: {
    headCells: {
      defaultValue: headCells,
      control: 'object',
    },
    rows: {
      defaultValue: rows,
      control: 'object',
    },
    title: {
      defaultValue: 'Rules',
      control: {
        type: 'text',
      },
    },
    onActionClick: {
      defaultValue: onActionClick,
    },
  },
}