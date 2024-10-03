interface Tabs {
  text?: string
  slot?: { name: string }
  [prop: string]: unknown
}

export interface Props {
  columns: Tabs[]
  active?: number | undefined
  textHidden?: boolean
}
