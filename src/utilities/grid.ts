export const sizes = {
  hd: 1200,
  //wide: 992,
  desktop: 992,
  tablet: 768,
  mobileLarge: 576,
  mobileLandscape: 360,
}

export const GRID_UNIT = 8

export const GUTTER = {
  mobile: 2 * GRID_UNIT,
  tablet: 4 * GRID_UNIT,
  desktop: 4 * GRID_UNIT,
}

export const COLUMN_WIDTH = {
  mobile: 43.8,
  tablet: 68.2,
  desktop: 68.2,
}

export const COLUMN_WIDTH_RELATIVE = 8.33

type GridCalculator<T> = { [K in keyof T]: (columnNum: number) => number }

export const gridWidth = Object.keys(sizes).reduce<GridCalculator<typeof sizes>>(
  (interpolations, size) => ({
    ...interpolations,
    [size]: columnNum => COLUMN_WIDTH[size] * columnNum + GUTTER[size] * (columnNum - 1),
  }),
  {} as GridCalculator<typeof sizes>
)
