import CancelIcon from '@material-ui/icons/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { Button, Checkbox } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import * as React from 'react'

import { categorizedStores } from './constants'
import { Store } from './types'

const GroupHeader = styled('span')<GroupHeaderProps>(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
}))

const StyledTag = styled(Button)({
  color: '#ffffff',
  backgroundColor: '#7dc69f',

  '&:hover': {
    backgroundColor: '#4ca752',
  },
})

const StyledCheckbox = styled(Checkbox)({
  color: '#7dc69f',
})

const GroupItems = styled('ul')({
  padding: 0,
})

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export interface RenderGroupProps {
  padding: number
}

export type GroupHeaderProps = React.HTMLAttributes<HTMLElement>

export const RenderGroup = ({ padding }: RenderGroupProps) => {
  const [selectedStores, setSelectedStores] = React.useState<any>([])
  const [options, setOptions] = React.useState<Store[]>([])

  const checkGroup = (group: string) => {
    const groupLength = categorizedStores.filter(c => c.group === group).length
    const selectedGroupLength = selectedStores.filter(c => c.group === group).length
    return groupLength === selectedGroupLength
  }

  const selectGroup = (group: string) => {
    const groupedStores = options.filter(option => option.group === group)
    const selectedGroupStores = selectedStores.filter(s => s.group === group)

    if (selectedGroupStores.length > 0) {
      setSelectedStores(prevState => [...prevState.filter(c => c.group !== group)])
    } else {
      setSelectedStores(prevState => [...prevState, ...groupedStores])
    }
  }

  const checkOption = (option: any) => {
    return selectedStores.some(c => c.id === option.id)
  }

  const unselectOption = (id: number) => {
    setSelectedStores(prevState => prevState.filter(c => c.id !== id))
  }

  React.useEffect(() => {
    const mappedOptions = categorizedStores.map(option => {
      return {
        label: option.name,
        ...option,
      }
    })

    setOptions(mappedOptions)
  }, [])

  return (
    <Autocomplete
      id="grouped-demo"
      multiple
      disableCloseOnSelect
      limitTags={2}
      sx={{ padding }}
      options={options.sort((a, b) => -b.group.localeCompare(a.group))}
      groupBy={option => option.group}
      getOptionLabel={option => option.label}
      fullWidth
      onChange={(_, option) => setSelectedStores([...(option as Store[])])}
      renderOption={(props, option) => (
        <li key={option.id + option.name} {...props}>
          <StyledCheckbox
            key={option.key}
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={checkOption(option)}
          />
          {option.label}
        </li>
      )}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label="Store Options"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password',
            }}
          />
        )
      }}
      renderGroup={params => {
        return (
          <React.Fragment key={params.group}>
            <StyledCheckbox
              icon={icon}
              checkedIcon={checkedIcon}
              checked={checkGroup(params.group)}
              onChange={() => selectGroup(params.group)}
            />
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems>{params.children}</GroupItems>
          </React.Fragment>
        )
      }}
      renderTags={() => {
        return selectedStores.map(tag => {
          return (
            <StyledTag
              size="small"
              variant="contained"
              key={tag.id}
              endIcon={<CancelIcon />}
              onClick={() => unselectOption(tag.id)}
            >
              {tag.label}
            </StyledTag>
          )
        })
      }}
    />
  )
}
