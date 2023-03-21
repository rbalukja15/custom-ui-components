export interface Data {
  id: number
  name: string
  isActive: boolean
  upperLimit: number
  lowerLimit: number
  flagReturns: boolean
  flagSoldOuts: boolean
  unit: string
}

export interface EnhancedTableProps {
  numSelected: number
  rowCount: number
}

export interface HeadCell {
  disablePadding: boolean
  id: keyof Data
  label: string
  numeric: boolean
}

export interface CustomTableDataProps {
  headCells: HeadCell[]
  rows: Data[]
  title: string
  onActionClick: (id: number) => void
}

export interface CustomTableHeaderProps {
  headCells: HeadCell[]
}
