import { useFormik } from 'formik'
import { useState } from 'react'
import { initialValues, useSignUpSchema } from './schemas/useSignUpSchema'
import { Segmento } from './types'

const useSignUp = () => {
  const [step, setStep] = useState<string>('1')
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  }

  const segmentos: Segmento[] = [
    { segmentoId: '1', segmentoNome: 'Segmento 1' },
    { segmentoId: '2', segmentoNome: 'Segmento 2' },
    { segmentoId: '3', segmentoNome: 'Segmento 3' },
  ]

  const formik = useFormik({
    initialValues,
    validationSchema: useSignUpSchema,
    onSubmit: () => handleSignUp(),
  })

  const handleSignUp = () => {
    setStep('2')
  }

  return {
    step,
    formik,
    selectedDate,
    segmentos,
    handleDateChange,
  }
}

export default useSignUp
