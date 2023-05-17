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
            align={headCell.isNumeric ? 'right' : 'center'}
            padding={headCell.isPaddingDisabled ? 'none' : 'normal'}
            colSpan={headCell.id === 'name' ? 2 : 1}
          >
            {headCell.label}
          </TableCell>
        ))}
        <TableCell align="center" />
      </TableRow>
    </TableHead>
  )
}
