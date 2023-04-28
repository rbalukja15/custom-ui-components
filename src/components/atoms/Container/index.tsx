import { styled } from '@mui/material/styles'
import * as React from 'react'

const getBackground = (background, backgroundHeight, theme) => {
  switch (background) {
    case 'top':
      return `linear-gradient(180deg, ${theme.palette.primary.main} 0px,
      ${theme.palette.primary.main} ${backgroundHeight}px,
       ${theme.palette.primary.main} ${backgroundHeight + 2}px,
       transparent ${backgroundHeight + 2}px)`
    case 'opaque':
      return theme.palette.primary.main
    default:
      return 'transparent'
  }
}

const StyledContainer = styled('section')<ContainerProps>(({ background, backgroundHeight, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  ['first-child']: {
    minHeight: '600px',
  },
  background: getBackground(background, backgroundHeight, theme),
}))

export interface ContainerProps extends Pick<React.HTMLAttributes<Container>, 'style'> {
  /** Container accept only children*/
  children: Array<React.ReactNode | React.ReactElement> | React.ReactNode | React.ReactElement
  background: 'transparent' | 'opaque' | 'top'
  backgroundHeight: number
}

export class Container extends React.PureComponent<ContainerProps> {
  static defaultProps = {
    background: 'transparent',
    backgroundHeight: 100,
  }

  render() {
    const { children, ...rest } = this.props
    return <StyledContainer {...rest}>{children}</StyledContainer>
  }
}
