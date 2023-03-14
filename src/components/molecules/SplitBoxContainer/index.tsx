import { styled } from '@mui/material/styles'
import * as React from 'react'

import { Col } from '../../Col'
import { Layout } from '../../Layout'

type SplitBoxContainerProps = {
  children?: React.ReactElement | React.ReactElement[]
  padding?: number
}

const StyledContainer = styled('div')<SplitBoxContainerProps>`
  border: 1.3px solid ${({ theme }) => theme.palette.primary.main};
  position: relative;
  border-radius: 4px;
  padding: ${({ padding }) => `${padding}px`};
  min-width: 700px;
`

type ColContainerProps = {
  left?: boolean
}

const ColContainer = styled('div')<ColContainerProps>`
  position: relative;
  max-height: 300px;
  overflow: auto;
  overscroll-behavior: contain;
`

const SeparatorLine = styled('div')(({ theme }) => ({
  margin: '8px 0px 24px 0px',
  padding: '0',
  borderBottom: '1px solid',
  color: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    position: 'absolute',
    top: '24px',
    bottom: '24px',
    margin: '0 !important',
    borderBottom: 'none',
    borderRight: '1px solid',
    left: '50%',
  },
}))

const ScrollableDiv = styled('div')`
  overflow: auto;
  overscroll-behavior: contain;
  height: 60vh - 18vh;
`

export class SplitBoxContainer extends React.PureComponent<SplitBoxContainerProps> {
  static defaultProps = {
    padding: 24,
  }
  render() {
    const { children, padding } = this.props
    const [left = null, right = null] = React.Children.map(children, (child, i) => (i < 2 ? child : null)) || []

    return (
      <StyledContainer padding={padding}>
        <Layout mode="grid" width={12} paddingTop="0">
          <Col width={right ? 6 : 12}>
            <ColContainer left>
              <ScrollableDiv>{left}</ScrollableDiv>
            </ColContainer>
          </Col>
          {right && (
            <Col width="6">
              <SeparatorLine data-cy-label="split-box-separator" />
              <ColContainer>
                <ScrollableDiv>{right}</ScrollableDiv>
              </ColContainer>
            </Col>
          )}
        </Layout>
      </StyledContainer>
    )
  }
}
