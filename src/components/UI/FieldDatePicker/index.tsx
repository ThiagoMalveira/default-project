import Typography, { FontType } from '@components/UI/Typography'
import { theme } from '@resources/theme'
import Dayjs from 'dayjs'
import { memo, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import * as SC from './styles'
import { IProps } from './types'

import ptBR from 'date-fns/locale/pt-BR'

import 'react-datepicker/dist/react-datepicker.css'
import Separator from '../Separator'

export const FieldDatePicker = ({
  onChange,
  maxDate = null,
  minDate = null,
  filterDate = () => false,
  selected = undefined,
  labelTop,
  labelColor = '',
}: IProps) => {
  registerLocale('pt-BR', ptBR)

  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (e) => {
    onChange(Dayjs(e[0]).format('MM/YYYY'))

    setIsOpen(!isOpen)
  }

  const handleClick = (e) => {
    setIsOpen(!isOpen)
    e.preventDefault()
  }

  return (
    <SC.Container>
      <SC.Label labelColor={labelColor}>{labelTop}</SC.Label>
      <Separator verticalSize={1} />
      <SC.WrapperDate onClick={handleClick}>
        <Typography
          fontType={FontType.regular}
          color={theme.palette.secondary.dark}
          size={14}
        >
          {selected ? selected : 'MM/AAAA'}
        </Typography>
      </SC.WrapperDate>

      {isOpen && (
        <SC.WrapperDatePicker>
          <DatePicker
            showYearPicker
            selectsRange={true}
            onChange={handleChange}
            inline
            dateFormat="MM/yyyy"
            locale="pt-BR"
            minDate={minDate}
            maxDate={maxDate}
            filterDate={filterDate}
          />
        </SC.WrapperDatePicker>
      )}
    </SC.Container>
  )
}

export default memo(FieldDatePicker)
