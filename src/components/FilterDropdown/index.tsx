import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Checkbox, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import * as React from 'react'

import usePrevious from '../../usePrevious'
import { Store } from '../Autocomplete/types'
import { SplitBoxContainer } from '../molecules/SplitBoxContainer'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
  },
}))

const StyledCheckbox = styled(Checkbox)`
  color: #7dc69f;
  margin-right: 8px;
`

export interface CustomizedMenuProps {
  padding?: number
  options: Store[]
  groupKeys: string[]
}

export const CustomizedMenus = ({ options, groupKeys }: CustomizedMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const [groups, setGroups] = React.useState<Store[]>(options.filter(option => Array.isArray(option.id)))
  const [notGroups, setNotGroups] = React.useState<Store[]>(options.filter(option => !Array.isArray(option.id)))
  const [searchValue, setSearchValue] = React.useState<string>('')
  const prevRef = usePrevious(notGroups)
  const open = Boolean(anchorEl)

  React.useEffect(() => {
    const areAllGroupsChecked = notGroups.every(s => s.checked)
    setGroups(prevState =>
      prevState.map(s => {
        if (s.categoryKey === 'all') {
          return {
            ...s,
            checked: areAllGroupsChecked,
          }
        }
        return {
          ...s,
          checked: notGroups.filter(store => (s.id as number[]).includes(store.id as number)).every(ng => ng.checked),
        }
      })
    )
  }, [notGroups])

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
  const checkedIcon = <CheckBoxIcon fontSize="small" />
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleGroupAllToggle = () => {
    const allGroup = groups.find(g => g.categoryKey === 'all')
    setNotGroups(prevState =>
      prevState.map(s => {
        return {
          ...s,
          checked: !allGroup?.checked,
        }
      })
    )
  }

  const handleGroupTypeToggle = (option: Store) => {
    setNotGroups(prevState =>
      prevState.map(s => {
        if ((option.id as number[]).includes(s.id as number)) {
          return {
            ...s,
            checked: !s.checked,
          }
        }
        return s
      })
    )
  }

  const handleMenuItemClick = (option: Store) => {
    if (option.categoryKey === 'all') {
      handleGroupAllToggle()
    } else if (option.categoryKey === 'adjusted') {
      handleGroupAllToggle()
    } else if (option.categoryKey === 'type') {
      handleGroupTypeToggle(option)
    } else if (option.categoryKey === 'manager') {
      handleGroupTypeToggle(option)
    }
  }

  const handleOptionClick = (option: Store) => {
    setNotGroups(prevState =>
      prevState.map(s => {
        if (s.id === option.id) {
          return {
            ...s,
            checked: !s.checked,
          }
        }
        return s
      })
    )
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Filiale(n) ({notGroups.length})
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <Box p={1}>
          <TextField
            label="Store Options"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            fullWidth
            inputProps={{
              autoComplete: 'new-password',
            }}
          />
          <Divider sx={{ p: 1 }} />
          <Box sx={{ pt: 1 }}>
            <Button variant={'outlined'} color={'warning'} sx={{ width: '50%' }} disabled={prevRef === notGroups}>
              Cancel
            </Button>
            <Button variant={'outlined'} color={'success'} sx={{ width: '50%' }} disabled={prevRef === notGroups}>
              Save
            </Button>
          </Box>
        </Box>
        <SplitBoxContainer>
          <>
            {groupKeys.map(key => {
              return (
                <>
                  <Typography variant="h6" gutterBottom>
                    {key}
                  </Typography>
                  {groups.map(group => {
                    if (group.group === key)
                      return (
                        <MenuItem onClick={() => handleMenuItemClick(group)} disableRipple>
                          <StyledCheckbox icon={icon} checkedIcon={checkedIcon} checked={group.checked} />
                          {group.name}
                        </MenuItem>
                      )
                    return null
                  })}
                </>
              )
            })}
          </>
          <>
            {notGroups.map((group, index) => {
              if (!group.name.includes(searchValue)) {
                return null
              }
              return (
                <MenuItem
                  key={`${group.categoryKey} + ${index}`}
                  onClick={() => handleOptionClick(group)}
                  disableRipple
                >
                  <StyledCheckbox icon={icon} checkedIcon={checkedIcon} checked={group.checked} />
                  {group.name}
                </MenuItem>
              )
            })}
          </>
        </SplitBoxContainer>
      </StyledMenu>
    </div>
  )
}
