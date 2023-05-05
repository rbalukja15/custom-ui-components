import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
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
  createData(1, 'Cupcakeeeeeeeeeeeeeeeeeeeeeeeeee', true, 3.7, 67, true, false, 'amount'),
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
    isNumeric: false,
    isPaddingDisabled: true,
    label: 'Name',
  },
  {
    id: 'isActive',
    isNumeric: false,
    isPaddingDisabled: false,
    label: 'Active',
  },
  {
    id: 'upperLimit',
    isNumeric: true,
    isPaddingDisabled: false,
    label: 'Upper limit',
  },
  {
    id: 'lowerLimit',
    isNumeric: true,
    isPaddingDisabled: false,
    label: 'Lower limit',
  },
  {
    id: 'flagReturns',
    isNumeric: false,
    isPaddingDisabled: false,
    label: 'Flag returns',
  },
  {
    id: 'flagSoldOuts',
    isNumeric: false,
    isPaddingDisabled: false,
    label: 'Flag sold outs',
  },
  {
    id: 'unit',
    isNumeric: false,
    isPaddingDisabled: false,
    label: 'Unit',
  },
]

const onActionClick = (id: number) => {
  console.log(id)
}

const Template: Story<CustomTableDataProps> = args => {
  const { headCells, rows, title, isPaginated } = args

  const headerAction = (
    <Button variant="contained" startIcon={<AddIcon />} onClick={() => alert('Action Clicked')}>
      Add
    </Button>
  )

  return (
    <CustomTable
      headCells={headCells}
      rows={rows}
      title={title}
      isPaginated={isPaginated}
      headerActionComponent={headerAction}
      onActionClick={onActionClick}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  headCells: headCells,
  rows: rows,
  title: 'Rules',
  onActionClick: onActionClick,
}

export default {
  title: 'Molecules/Table',
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
