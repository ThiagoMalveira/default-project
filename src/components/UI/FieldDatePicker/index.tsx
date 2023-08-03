import Typography, { FontType } from '@components/UI/Typography'
import { theme } from '@resources/theme'
import { memo, useState } from 'react'
import DatePicker, { registerLocale } from 'react-datepicker'

import { parse } from 'date-fns'
import * as SC from './styles'
import { IProps } from './types'

import ptBR from 'date-fns/locale/pt-BR'

import 'react-datepicker/dist/react-datepicker.css'
import Separator from '../Separator'

export const FieldDatePicker = ({
  onChange,
  selectedDate,
  labelTop,
  labelColor = '',

  errorMessage = '',
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  registerLocale('pt-BR', ptBR)

  const handleClick = (e) => {
    setIsOpen(!isOpen)

    e.preventDefault()
  }

  const dateValue =
    selectedDate !== null ? parse(selectedDate, 'dd/MM/yyyy', new Date()) : null

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
          {selectedDate ? selectedDate : 'DD/MM/AAAA'}
        </Typography>
      </SC.WrapperDate>

      {isOpen && (
        <SC.WrapperDatePicker>
          <DatePicker
            allowSameDay
            selected={dateValue}
            onChange={onChange}
            inline
            dateFormat="dd-MM-yyyy"
            locale="pt-BR"
          />
        </SC.WrapperDatePicker>
      )}
      <Separator verticalSize={4} />
      <Typography
        size={16}
        align="flex-start"
        lineHeight="15px"
        weight="400"
        fontType={FontType.bold}
      >
        {errorMessage}
      </Typography>
    </SC.Container>
  )
}

export default memo(FieldDatePicker)
