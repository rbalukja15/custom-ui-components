import * as R from 'ramda'

import { CommonTheme } from './Common'
import { DarkTheme } from './DarkTheme'
import { LightTheme } from './LightTheme'

export const Themes = {
  lightTheme: R.mergeDeepRight(CommonTheme, LightTheme),
  darkTheme: R.mergeDeepRight(CommonTheme, DarkTheme),
}
