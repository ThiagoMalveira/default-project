export interface IProps {
  onChange: (date: Date) => void
  minDate?: Date | null | undefined
  maxDate?: Date | null | undefined
  filterDate?(date: Date): boolean
  selectedDate: string | null
  labelTop: string
  labelColor?: string

  errorMessage: string | undefined
}
