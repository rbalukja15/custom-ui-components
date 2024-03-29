import { styled } from '@mui/material/styles'
import * as React from 'react'

import { COLUMN_WIDTH_RELATIVE } from '../../../utilities/grid'

const StyledColumn = styled('div')(({ theme }) => ({
  width: '100%',

  [theme.breakpoints.down('md')]: {
    width: ({ width }) => `${width * COLUMN_WIDTH_RELATIVE}%`,
  },
}))

export interface ColProps {
  /**The column should have contents*/
  children: Array<React.ReactNode | React.ReactElement> | React.ReactNode | React.ReactElement
  /** Width of the column in grid units (1 - 12)*/
  width:
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
}

export class Col extends React.PureComponent<ColProps> {
  render() {
    const { children, ...props } = this.props
    return <StyledColumn {...props}>{children}</StyledColumn>
  }
}
