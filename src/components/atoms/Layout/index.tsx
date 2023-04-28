import * as React from 'react'
import styled from 'styled-components'

import { RowWrapper } from './RowWrapper'
import { GUTTER, gridWidth } from '../../../utilities/grid'
import { media } from '../../../utilities/media'

const LayoutDiv = styled.div`
  width: 100%;
  ${media.tablet`
    ${({ paddingTop }) => (paddingTop ? `padding-top:${parseInt(paddingTop)}px;` : '')}
    max-width: ${({ width }) => gridWidth['tablet'](parseInt(width))}px;
  `};
`

export interface LayoutProps {
  children: React.ReactNode | React.ReactNode[]
  /** Width of the layout. The numbers represent the amount of columns to take in a grid*/
  width:
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
  /** Column mode renders children stacked in one, full-width column.
   * Grid mode sets up a 12 column layout. Children will be displayed in one line.
   */
  mode: 'column' | 'grid'
  /** By default a layout has a top padding of 40px. This can be changed with the paddingTop property  (px unit).*/
  paddingTop: number | string
  /** By default a layout has a gutter of 32px. Gutters are spacing between content tracks. (px unit).*/
  gutter: number | string
  /** Alignment */
  alignment?: 'left' | 'center' | 'right'
}

export class Layout extends React.PureComponent<LayoutProps> {
  static defaultProps = {
    width: 12,
    mode: 'grid',
    paddingTop: 40,
    gutter: GUTTER['tablet'],
  }

  render() {
    const { children, ...props } = this.props
    return (
      <LayoutDiv {...props}>
        <RowWrapper {...props}>{children}</RowWrapper>
      </LayoutDiv>
    )
  }
}
