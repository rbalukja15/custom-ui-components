import { styled } from '@mui/material/styles'

import { LayoutProps } from './index'
import { GUTTER } from '../../../utilities/grid'

export const RowWrapper = styled('div')<LayoutProps>(({ theme }) => ({
  display: 'flex',
  flex: '1 1 1',
  flexDirection: 'column',

  '& > *:not(:first-of-type)': {
    margin: `${GUTTER.mobile}px 0 0 0`,
  },
  [theme.breakpoints.up('md')]: {
    ...props => {
      if (props.mode === 'grid') {
        let justifyContent = 'center'
        if (props.alignment === 'left') {
          justifyContent = 'flex-start'
        } else if (props.alignment === 'right') {
          justifyContent = 'flex-end'
        }

        return {
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: justifyContent,

          '& > *:not(:first-of-type)': {
            margin: 0,
          },

          marginLeft: `-${Number(props.gutter) / 2}px`,
          marginRight: `-${Number(props.gutter) / 2}px`,

          '& > *': {
            padding: `0 ${Number(props.gutter) / 2}px`,
          },
        }
      } else {
        let alignItems = 'flex-start'
        if (props.alignment === 'right') {
          alignItems = 'flex-end'
        } else if (props.alignment === 'center') {
          alignItems = 'center'
        }

        return {
          flexDirection: 'column',
          alignItems: alignItems,
          '& > *:not(:first-of-type)': {
            margin: `${props.gutter}px 0 0 0`,
          },
        }
      }
    },
  },
}))
