import styled from 'styled-components'

import { LayoutProps } from './index'
import { GUTTER } from '../../utilities/grid'
import { media } from '../../utilities/media'

export const RowWrapper = styled.div<LayoutProps>`
  display: flex;
  flex: 1 1 1;
  flex-direction: column;

  & > *:not(:first-of-type) {
    margin: ${GUTTER.mobile}px 0 0 0;
  }

  ${media.tablet`
    ${({ mode, gutter, alignment }: LayoutProps) => {
      if (mode === 'grid') {
        let justifyContent = 'center'
        if (alignment === 'left') {
          justifyContent = 'flex-start'
        } else if (alignment === 'right') {
          justifyContent = 'flex-end'
        }

        return `
          flex-direction: row;
          align-items: flex-start;
          justify-content: ${justifyContent};

          & > *:not(:first-of-type) {
            margin: 0;
          }

          margin-left: -${Number(gutter) / 2}px;
          margin-right: -${Number(gutter) / 2}px;

          & > * {
            padding: 0 ${Number(gutter) / 2}px;
          }
        `
      } else {
        let alignItems = 'flex-start'
        if (alignment === 'right') {
          alignItems = 'flex-end'
        } else if (alignment === 'center') {
          alignItems = 'center'
        }

        return `
          flex-direction: column;
          align-items: ${alignItems};
          & > *:not(:first-of-type) {
            margin: ${gutter}px 0 0 0;
          }
        `
      }
    }}
  `};
`
