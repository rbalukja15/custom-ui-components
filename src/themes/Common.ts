import { createTheme } from '@mui/material/styles'

import { BASE_TYPOGRAPHY } from './BaseFonts'

export const CommonTheme = createTheme({
  breakpoints: {
    values: {
      xs: 360,
      sm: 576,
      md: 992,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: BASE_TYPOGRAPHY.FONT_FAMILY,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 800,
    h1: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_900,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    h2: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_800,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    h3: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_700,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    h4: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_600,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    h5: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_500,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    h6: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_400,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_BOLD,
    },
    subtitle1: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_200,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_LIGHT,
    },
    subtitle2: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_100,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_LIGHT,
    },
    body1: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_300,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_NORMAL,
    },
    body2: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_200,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_NORMAL,
    },
    button: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_300,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_NORMAL,
      letterSpacing: 0.5,
      textTransform: 'none',
    },
    caption: {
      ...BASE_TYPOGRAPHY.FONT_SIZE_200,
      fontWeight: BASE_TYPOGRAPHY.FONT_WEIGHT_NORMAL,
      letterSpacing: 0,
    },
  },
  components: {
    MuiButton: { styleOverrides: { startIcon: { marginRight: '3px' }, endIcon: { marginLeft: '3px' } } },
    MuiButtonBase: { styleOverrides: { root: { padding: '12px 16px' } } },
    MuiLink: { styleOverrides: { root: { textDecoration: 'none' } } },
    MuiTableCell: {
      styleOverrides: {
        head: {
          paddingTop: '8px',
          paddingBottom: '8px',
          border: 0,

          '& .MuiButtonBase-root': { paddingTop: '0', paddingBottom: '0' },
        },
        body: { border: 0, padding: 2 },
        footer: { fontSize: '16px', lineHeight: '22px', border: 0 },
      },
    },
    MuiModal: { styleOverrides: { root: { '& .MuiBox-root:focus-visible': { outline: 0 } } } },
  },
})
