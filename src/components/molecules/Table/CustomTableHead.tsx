import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import { CustomTableHeaderProps } from './types'

export const CustomTableHead = ({ headCells }: CustomTableHeaderProps) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" />
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id as string}
            align={headCell.numeric ? 'right' : 'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell align="center">Action</TableCell>
      </TableRow>
    </TableHead>
  )
}
