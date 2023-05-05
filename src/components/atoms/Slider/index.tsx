import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { styled, Theme, useTheme } from '@mui/material/styles'
import * as React from 'react'

import { BASE_COLORS } from '../../../themes/BaseColors'

function valuetext(value: number) {
  return `${value}`
}

export interface RangeSliderProps {
  min: number
  max: number
  value: number | number[]
  fillerColor?: string
  barColor?: string
  track?: 'normal' | false | 'inverted'
  sx?: SxProps<Theme> | undefined
  onRangeChange?: (event: Event, value: number | number[]) => void
}

export interface StyledSliderProps extends RangeSliderProps {
  lowerValue: number
}

const getColor = (props: StyledSliderProps) => {
  if (props.lowerValue < 0) {
    return `linear-gradient(to right, ${BASE_COLORS.COLOR_PURPLE_600} 0%, ${props.barColor} ${calculateMarkPercentage(
      props.min,
      props.max
    )}%, ${props.barColor} 100%)`
  }
  if (props.track === 'inverted') {
    return BASE_COLORS.COLOR_GREEN_500
  }
  return `linear-gradient(to right, ${props.barColor} 0%, ${props.barColor} 100%)`
}

const getTrack = (props: StyledSliderProps) => {
  if (props.track === 'inverted') {
    return `linear-gradient(to left, ${BASE_COLORS.COLOR_PINK_300} 0%, ${
      BASE_COLORS.COLOR_PINK_300
    } ${calculateMarkPercentage(props.min, props.max)}%, ${props.barColor} 100%)`
  }
  return BASE_COLORS.COLOR_GREEN_500
}

const calculateMarkPercentage = (min: number, max: number) => {
  const upper = Math.abs(min)
  const lower = Math.abs(min) + max
  return (upper / lower) * 100
}

export const StyledSlider = styled(Slider, {
  shouldForwardProp: prop =>
    prop !== 'lowerValue' && prop !== 'fillerColor' && prop !== 'barColor' && prop !== 'onRangeChange' && prop !== 'sx',
})<StyledSliderProps>(props => ({
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    background: getTrack(props),
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    border: `1px solid ${props.fillerColor}`,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-rail': {
    background: getColor(props),
    transition: 'background-color 0.2s',
    transitionTimingFunction: 'ease-in-out',
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: props.fillerColor,
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
}))

export const RangeSliderComponent: React.FC<RangeSliderProps> = ({ ...props }) => {
  const theme = useTheme()
  const {
    fillerColor = theme.palette.primary.main,
    barColor = theme.palette.primary.main,
    min,
    max,
    value,
    sx,
    onRangeChange,
    ...rest
  } = props

  const marks = [
    {
      value: min,
      label: `${min}`,
    },
    {
      value: 0,
      label: '0',
    },
    { value: max, label: `${max}` },
  ]

  const handleChange = (event: Event, newValue: number[]) => {
    onRangeChange && onRangeChange(event, newValue)
  }

  return (
    <Box sx={sx}>
      <StyledSlider
        data-testid={'custom-range-slider'}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        barColor={barColor}
        fillerColor={fillerColor}
        marks={marks}
        lowerValue={value[0]}
        min={min}
        max={max}
        {...rest}
      />
    </Box>
  )
}

export const RangeSlider = RangeSliderComponent
