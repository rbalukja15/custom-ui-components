import { styled, useTheme } from '@mui/material/styles'
import * as React from 'react'

interface BarProps {
  barColor: string
  rounded: boolean
}

const Bar = styled('div')<BarProps>`
  position: relative;
  height: 24px;
  width: 100%;
  background-color: ${props => props.barColor};
  border-radius: ${props => (props.rounded ? '12px' : '0')};
  overflow: hidden;
`

interface FillerProps {
  percentage: number
  fillerColor: string
}

const Filler = styled('div')<FillerProps>`
  width: ${props => props.percentage}%;
  background: ${props => props.fillerColor};
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`

export interface ProgressBarProps {
  percentage: number
  fillerColor?: string
  barColor?: string
  rounded?: boolean
}

export const ProgressBarComponent: React.FC<ProgressBarProps> = ({ ...props }) => {
  const theme = useTheme()
  const {
    fillerColor = theme.palette.primary.light,
    barColor = theme.palette.primary.dark,
    rounded = false,
    percentage,
    ...rest
  } = props

  return (
    <Bar data-cy-label="mf-progress-bar" barColor={barColor} rounded={rounded} {...rest}>
      <Filler fillerColor={fillerColor} percentage={percentage} />
    </Bar>
  )
}

export const ProgressBar = ProgressBarComponent
