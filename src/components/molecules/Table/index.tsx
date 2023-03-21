import LaunchIcon from '@mui/icons-material/Launch'
import { IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import * as React from 'react'

import { CustomTableHead } from './CustomTableHead'
import { TableToolbar } from './ToolBar'
import { CustomTableDataProps } from './types'

export const CustomTable = ({ headCells, rows, title, onActionClick }: CustomTableDataProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const renderBoolean = (value: boolean): string => {
    return value ? 'TRUE' : 'FALSE'
  }

  const handleOnClick = (id: number) => {
    onActionClick && onActionClick(id)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableToolbar numSelected={0} title={title} />
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
            <CustomTableHead headCells={headCells} />
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={labelId}>
                    <TableCell padding="checkbox" />
                    {headCells.map((cell, index) => {
                      const isBoolean = typeof row[cell.id] === 'boolean'
                      return (
                        <TableCell key={`${row.id}-${index}`} align="center">
                          {isBoolean ? renderBoolean(row[cell.id] as boolean) : row[cell.id]}
                        </TableCell>
                      )
                    })}
                    <TableCell align="center">
                      <IconButton aria-label="view item" color="primary" onClick={() => handleOnClick(row.id)}>
                        <LaunchIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                )
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={8} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  )
}
