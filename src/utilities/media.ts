import { css, InterpolationValue } from 'styled-components'

export const sizes = {
  hd: 1200,
  desktop: 992,
  tablet: 768,
  mobileLarge: 576,
  mobileLandscape: 360,
}

export const screenSizes = label => `${sizes[label] / 16}em`

type GeneratedTemplates<T> = {
  [P in keyof T]: (strings: any, ...interpolations: any[]) => InterpolationValue[]
}
const generateTemplates = <T extends object>(source: T): GeneratedTemplates<T> =>
  Object.keys(source).reduce((result, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    result[label] = (arg1: any, ...args) => css`
      @media (min-width: ${screenSizes(label)}) {
        ${css(arg1, ...args)};
      }
    `
    return result
  }, {} as GeneratedTemplates<T>)

// iterate through the sizes and create a media template
export const media = generateTemplates(sizes)
