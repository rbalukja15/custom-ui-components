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
  id: string
  isNumeric: boolean
  isPaddingDisabled: boolean
  label: string
}

export interface CustomTableDataProps {
  headCells: HeadCell[]
  rows: any[]
  title?: string
  onActionClick?: (id: number) => void
  isPaginated?: boolean
}

export interface CustomTableHeaderProps {
  headCells: HeadCell[]
}
