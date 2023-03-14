export interface Store {
  id: number | number[]
  name: string
  label: string
  address?: string
  lat?: number
  lon?: number
  adjusted?: boolean
  type?: string | null
  manager?: string | null
  relevant_in_sales?: boolean
  active_in?: string[]
  allowed_products?: string[]
  preselect_in?: string[]
  checked: boolean
  category: string
  categoryKey?: string
  key: string
  group: string
}
