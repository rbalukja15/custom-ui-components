import DeleteIcon from '@mui/icons-material/Delete'
import LaunchIcon from '@mui/icons-material/Launch'
import { IconButton, Tooltip, Typography } from '@mui/material'
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
import { CustomTableDataProps, TableBoolean } from './types'

export const CustomTable = ({
  headCells,
  rows,
  title,
  isPaginated,
  headerActionComponent,
  onDeleteActionClick,
  onEditActionClick,
}: CustomTableDataProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(30)

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
    return value ? TableBoolean.TRUE : TableBoolean.FALSE
  }

  const defaultRenderer = (item, field) => {
    if (typeof item[field] === 'undefined') {
      throw new Error(`Data not found for ${field}`)
    }

    if (field === 'name') {
      return (
        <Tooltip title={item[field]} placement="bottom" id="nameTooltip">
          <Typography
            variant="body1"
            sx={{
              maxWidth: '80%', // percentage also works
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {item[field]}
          </Typography>
        </Tooltip>
      )
    }

    return (
      <Typography
        variant="body1"
        sx={{
          maxWidth: 200, // percentage also works
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {item[field]}
      </Typography>
    )
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flexGrow: 1 }}>{title && <TableToolbar numSelected={0} title={title} />}</Box>
          {headerActionComponent && (
            <Box sx={{ p: 2 }} data-testid={'custom-header-action'}>
              {headerActionComponent}
            </Box>
          )}
        </Box>
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
                        <TableCell
                          key={`${row.id}-${index}`}
                          align={cell.isNumeric ? 'right' : 'center'}
                          colSpan={cell.id === 'name' ? 2 : 1}
                        >
                          {isBoolean ? renderBoolean(row[cell.id] as boolean) : defaultRenderer(row, cell.id)}
                        </TableCell>
                      )
                    })}
                    <TableCell align="center">
                      {onDeleteActionClick && (
                        <IconButton
                          key={`${row.id}-delete`}
                          data-testid={'delete-action'}
                          aria-label="view item"
                          color="primary"
                          onClick={() => onDeleteActionClick(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                      {onEditActionClick && (
                        <IconButton
                          key={`${row.id}-edit`}
                          data-testid={'edit-action'}
                          aria-label="view item"
                          color="primary"
                          onClick={() => onEditActionClick(row.id)}
                        >
                          <LaunchIcon />
                        </IconButton>
                      )}
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
        {isPaginated && (
          <TablePagination
            id="customPagination"
            rowsPerPageOptions={[30, 50, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
      </Paper>
    </Box>
  )
}
