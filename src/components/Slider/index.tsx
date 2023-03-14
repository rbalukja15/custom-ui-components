import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { styled, useTheme } from '@mui/material/styles'
import * as React from 'react'

function valuetext(value: number) {
  return `${value}°C`
}

export interface PrettoSliderProps {
  fillerColor?: string
  barColor?: string
}

export interface RangeSliderProps {
  fillerColor?: string
  barColor?: string
}

const PrettoSlider = styled(Slider)(({ fillerColor, barColor }: PrettoSliderProps) => ({
  color: barColor,
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: fillerColor,
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: fillerColor,
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
  const { fillerColor = theme.palette.primary.dark, barColor = theme.palette.primary.dark, ...rest } = props

  const [value, setValue] = React.useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box sx={{ width: 300 }}>
      <PrettoSlider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        barColor={barColor}
        fillerColor={fillerColor}
        {...rest}
      />
    </Box>
  )
}

export const RangeSlider = RangeSliderComponent
