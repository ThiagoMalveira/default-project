export interface IProps {
  onChange: (date: string) => void
  minDate?: Date | null | undefined
  maxDate?: Date | null | undefined
  filterDate?(date: Date): boolean
  selected?: string
  labelTop: string
  labelColor?: string
}
