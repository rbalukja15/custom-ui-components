import { Button } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { render as rtlRender } from '@testing-library/react'
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

describe('Test CustomTable', () => {
  beforeAll(() => {})

  it('should fail if any field is not available in the data', () => {
    const erroredCells = [
      ...headCells,
      {
        id: 'test',
        isNumeric: false,
        isPaddingDisabled: true,
        label: 'Test',
      },
    ]
    //Reduce error polution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = mount(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={erroredCells} rows={rows} title="Rules" />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('p').first().text()).toBe('Error: Data not found for test')
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should display title toolbar when title is passed as prop', () => {
    //Reduce error polution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} title="Rules" />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#tableTitle')).toHaveLength(1)
    expect(element.find('#tableTitle').first().text()).toBe('Rules')
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should not display title toolbar when title is not passed as prop', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#tableTitle')).toHaveLength(0)
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should not render pagination when `isPaginated` is `false or undefined`', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#customPagination')).toHaveLength(0)
    // Restore console error
    console.error = disabledConsoleError
  })

  it('should render pagination when `isPaginated` is `true`', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('#customPagination')).toHaveLength(1)
    // Restore console error
    console.error = disabledConsoleError
  })

  it("should render a tooltip for column 'name'", () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const element = render(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(element.find('[data-mui-internal-clone-element="true"]').first().prop('aria-label')).toBe('Cupcake')
    // Restore console error
    console.error = disabledConsoleError
  })

  // Test for the action button
  it('should render an action button', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const { getByTestId } = rtlRender(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated headerActionComponent={<Button />} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    const headerAction = getByTestId('custom-header-action')
    expect(headerAction).not.toBeNull()
    // Restore console error
    console.error = disabledConsoleError
  })

  // Test for the action button to not be shown
  it('should not render an action button', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const { getByTestId } = rtlRender(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(() => getByTestId('custom-header-action')).toThrow(
      'Unable to find an element by: [data-testid="custom-header-action"]'
    )
    // Restore console error
    console.error = disabledConsoleError
  })

  // Test for the icon button with data-testid = 'delete-action' to not be shown if prop onDeleteActionClick is not passed
  it('should not render an icon button with data-testid = "delete-action" if prop onDeleteActionClick is not passed', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const { getByTestId } = rtlRender(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(() => getByTestId('delete-action')).toThrow('Unable to find an element by: [data-testid="delete-action"]')
    // Restore console error
    console.error = disabledConsoleError
  })

  // Test for the icon button with data-testid = 'delete-action' to be shown if prop onDeleteActionClick is passed
  it('should render an icon button with data-testid = "delete-action" if prop onDeleteActionClick is passed', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const { getByTestId } = rtlRender(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated onDeleteActionClick={() => {}} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(getByTestId('delete-action')).not.toBeNull()
    // Restore console error
    console.error = disabledConsoleError
  })

  // Test for the icon button with data-testid = 'edit-action' to not be shown if prop onEditActionClick is not passed
  it('should not render an icon button with data-testid = "edit-action" if prop onEditActionClick is not passed', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const { getByTestId } = rtlRender(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(() => getByTestId('edit-action')).toThrow('Unable to find an element by: [data-testid="edit-action"]')
    // Restore console error
    console.error = disabledConsoleError
  })

  // Test for the icon button with data-testid = 'edit-action' to be shown if prop onEditActionClick is passed
  it('should render an icon button with data-testid = "edit-action" if prop onEditActionClick is passed', () => {
    // Reduce error pollution in the terminal
    const disabledConsoleError = console.error
    console.error = msg => {}

    const { getByTestId } = rtlRender(
      <ThemeProvider theme={Themes.lightTheme}>
        <ErrorBoundary>
          <CustomTable headCells={headCells} rows={rows} isPaginated onEditActionClick={() => {}} />
        </ErrorBoundary>
      </ThemeProvider>
    )
    expect(getByTestId('edit-action')).not.toBeNull()
    // Restore console error
    console.error = disabledConsoleError
  })
})
