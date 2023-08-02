import Typography, { FontType } from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { memo, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import * as SC from './styles'
import { IProps } from './types'

import ptBR from 'date-fns/locale/pt-BR'

import 'react-datepicker/dist/react-datepicker.css'
import Separator from '../Separator'

export const FieldDatePicker = ({
  onChange,
  value,

  selectedDate,
  labelTop,
  labelColor = '',
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' }

  registerLocale('pt-BR', ptBR)

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
          {selectedDate
            ? selectedDate.toLocaleString('pt-BR', options)
            : 'DD/MM/AAAA'}
        </Typography>
      </SC.WrapperDate>

      {isOpen && (
        <SC.WrapperDatePicker>
          <DatePicker
            selected={selectedDate}
            onChange={onChange}
            value={value}
            inline
            dateFormat="yyyy-MM-dd"
            locale="pt-BR"
          />
        </SC.WrapperDatePicker>
      )}
    </SC.Container>
  )
}

export default memo(FieldDatePicker)
