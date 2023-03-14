import { useMemo } from 'react'
// import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

import { Themes } from '../src'

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => Themes[themeKey] || Themes['lightTheme'], [themeKey])

  return (
    <ThemeProvider theme={theme}>
      {/*<CssBaseline />*/}
      <Story />
    </ThemeProvider>
  )
}
