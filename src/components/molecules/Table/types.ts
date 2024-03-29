import * as React from 'react'

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
  headerActionComponent?: React.ReactNode
  isPaginated?: boolean
  actions?: React.ReactNode[]
  onDeleteActionClick?: (id: number) => void
  onEditActionClick?: (id: number) => void
}

export interface CustomTableHeaderProps {
  headCells: HeadCell[]
}

export enum TableBoolean {
  TRUE = 'TRUE',
  FALSE = 'FALSE',
}
