import { ThemeOptions } from '@mui/material/styles'

import { BASE_COLORS } from './BaseColors'

export const LightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: BASE_COLORS.COLOR_GREEN_500,
      contrastText: BASE_COLORS.COLOR_NEUTRAL_0,
    },
    secondary: {
      main: BASE_COLORS.COLOR_BLUE_1100,
    },
    success: {
      main: BASE_COLORS.COLOR_GREEN_700,
    },
    info: {
      main: BASE_COLORS.COLOR_BLUE_700,
    },
    warning: {
      main: BASE_COLORS.COLOR_YELLOW_500,
    },
    error: {
      main: BASE_COLORS.COLOR_RED_700,
    },
    text: {
      primary: BASE_COLORS.COLOR_NEUTRAL_800,
    },
    background: {
      default: BASE_COLORS.COLOR_NEUTRAL_100,
    },
  },
  shadows: [
    'none',
    '0 0 4px 0 rgba(53, 64, 82, 0.1)',
    '0 0 8px 0 rgba(53, 64, 82, 0.1)',
    '0 1px 12px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',

    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',

    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',

    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',

    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
    '0 2px 16px 0 rgba(53, 64, 82, 0.1)',
  ],
  components: {
    MuiTablePagination: {
      styleOverrides: {
        select: { background: '#FDFBE9', fontSize: '16px', lineHeight: '24px' },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: { borderColor: '#F0D721' },
        containedPrimary: { '&:hover, &:focus': { backgroundColor: '#D2BB0F' } },
        outlinedSecondary: {
          color: '#252424',
          borderColor: '#F0D721',
          backgroundColor: '#FFF',
          '&:hover, &:focus': { borderColor: '#F0D721', backgroundColor: '#FDFBE9' },
        },
      },
    },
    MuiTableHead: { styleOverrides: { root: { backgroundColor: '#F8F8F8' } } },
    MuiTableCell: {
      styleOverrides: {
        footer: {
          color: '#212121', // 'rgba(0, 0, 0, 0.87)',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-last-of-type(-n+1)': {
            // remove border from last entry but MUI adds an empty row after the last filled row, so we remove both borders
            borderBottom: 'none', // '1px dashed rgb(71, 71, 71)',
          },
          borderBottom: '1px solid #E0E0E0',
          '&:hover': { backgroundColor: '#FDFBE9' },
        },
      },
    },
    MuiMenuItem: { styleOverrides: { root: { padding: '4px 14px', '&:hover': { backgroundColor: '#F8F8F8' } } } },
  },
}
