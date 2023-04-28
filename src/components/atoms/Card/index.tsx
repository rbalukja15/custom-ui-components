import { styled } from '@mui/material/styles'
import * as React from 'react'

export const CardWrapper = styled('div')<CardProps>`
  display: block;
  width: auto;
  background-color: ${props => props.theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 4px;
  padding: ${({ padding }) => Number(padding)}px;
  overflow: ${({ overflow }) => overflow};
  .match-height {
    height: 100%;
  }
`

type Overflow = 'visible' | 'hidden' | 'scroll' | 'auto' | 'initial' | 'inherit'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Description of prop "padding". */
  padding: number | string
  /** Description of prop "overflow". */
  overflow: Overflow
}

export class Card extends React.PureComponent<CardProps> {
  static defaultProps = {
    padding: 0,
    overflow: 'hidden' as Overflow,
  }

  render() {
    return <CardWrapper {...this.props} />
  }
}
