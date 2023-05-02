import { ThemeProvider } from '@mui/material/styles'
import { mount, render } from 'enzyme'

import { CustomTable } from './index'
import { Themes } from '../../../themes'
import { ErrorBoundary } from '../../../utilities/ErrorBoundary'

const rows = [
  {
    id: 1,
    name: 'Cupcake',
    isActive: true,
    upperLimit: 3.7,
    lowerLimit: 67,
    flagReturns: true,
    flagSoldOuts: false,
    unit: 'amount',
  },
]

describe('CustomTable', () => {
  beforeAll(() => {})

  it('should fail if any field is not available in the data', () => {
    const headCells = [
      {
        id: 'name',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Name',
      },
      {
        id: 'isActive',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Active',
      },
      {
        id: 'test',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Upper limit',
      },
      {
        id: 'lowerLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Lower limit',
      },
      {
        id: 'flagReturns',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag returns',
      },
      {
        id: 'flagSoldOuts',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag sold outs',
      },
      {
        id: 'unit',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Unit',
      },
    ]

    //Reduce error polution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = mount(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} title="Rules" onActionClick={() => console.log('click')} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('p').first().text()).toBe('Error: Data not found for test')
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should display title toolbar when title is passed as prop', () => {
    const headCells = [
      {
        id: 'name',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Name',
      },
      {
        id: 'isActive',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Active',
      },
      {
        id: 'upperLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Upper limit',
      },
      {
        id: 'lowerLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Lower limit',
      },
      {
        id: 'flagReturns',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag returns',
      },
      {
        id: 'flagSoldOuts',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag sold outs',
      },
      {
        id: 'unit',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Unit',
      },
    ]

    //Reduce error polution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} title="Rules" onActionClick={() => console.log('click')} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#tableTitle')).toHaveLength(1)
    expect(element.find('#tableTitle').first().text()).toBe('Rules')
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should not display title toolbar when title is not passed as prop', () => {
    const headCells = [
      {
        id: 'name',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Name',
      },
      {
        id: 'isActive',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Active',
      },
      {
        id: 'upperLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Upper limit',
      },
      {
        id: 'lowerLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Lower limit',
      },
      {
        id: 'flagReturns',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag returns',
      },
      {
        id: 'flagSoldOuts',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag sold outs',
      },
      {
        id: 'unit',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Unit',
      },
    ]

    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} onActionClick={() => console.log('click')} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#tableTitle')).toHaveLength(0)
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should not render pagination when `isPaginated` is `false or undefined`', () => {
    const headCells = [
      {
        id: 'name',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Name',
      },
      {
        id: 'isActive',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Active',
      },
      {
        id: 'upperLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Upper limit',
      },
      {
        id: 'lowerLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Lower limit',
      },
      {
        id: 'flagReturns',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag returns',
      },
      {
        id: 'flagSoldOuts',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag sold outs',
      },
      {
        id: 'unit',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Unit',
      },
    ]

    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} onActionClick={() => console.log('click')} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#customPagination')).toHaveLength(0)
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should render pagination when `isPaginated` is `true`', () => {
    const headCells = [
      {
        id: 'name',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Name',
      },
      {
        id: 'isActive',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Active',
      },
      {
        id: 'upperLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Upper limit',
      },
      {
        id: 'lowerLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Lower limit',
      },
      {
        id: 'flagReturns',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag returns',
      },
      {
        id: 'flagSoldOuts',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag sold outs',
      },
      {
        id: 'unit',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Unit',
      },
    ]

    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated onActionClick={() => console.log('click')} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#customPagination')).toHaveLength(1)
    // Restore console error
    console.error = disabledConsoleError
  })

  it("should render a tooltip for column 'name'", () => {
    const headCells = [
      {
        id: 'name',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Name',
      },
      {
        id: 'isActive',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Active',
      },
      {
        id: 'upperLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Upper limit',
      },
      {
        id: 'lowerLimit',
        isNumeric: true,
        isPaddingDisabled: false,
        label: 'Lower limit',
      },
      {
        id: 'flagReturns',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag returns',
      },
      {
        id: 'flagSoldOuts',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Flag sold outs',
      },
      {
        id: 'unit',
        isNumeric: false,
        isPaddingDisabled: false,
        label: 'Unit',
      },
    ]

    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated onActionClick={() => console.log('click')} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('[data-mui-internal-clone-element="true"]').first().prop('aria-label')).toBe('Cupcake')
    // Restore console error
    console.error = disabledConsoleError
  })
})
