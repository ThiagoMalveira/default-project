export interface IProps {
  onChange: (date: Date) => void
  minDate?: Date | null | undefined
  maxDate?: Date | null | undefined
  filterDate?(date: Date): boolean
  selectedDate: Date | null
  labelTop: string
  labelColor?: string
  value: string
}
