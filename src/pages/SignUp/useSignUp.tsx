import HandleNotification from '@resources/helpers/handleNotification'
import { typesNotification } from '@resources/types/notification'
import { ClientService } from '@services/client'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { useState } from 'react'
import { initialValues, useSignUpSchema } from './schemas/useSignUpSchema'
import { Segmento } from './types'

const useSignUp = () => {
  const [step, setStep] = useState<string>('1')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? dayjs(date).format('DD/MM/YYYY') : ''
    setSelectedDate(formattedDate)
    formik.setFieldValue('clienteDataFundacao', formattedDate)
  }

  const segmentos: Segmento[] = [
    { segmentoId: 0, segmentoNome: 'Selecione um segmento!' },
    { segmentoId: 1, segmentoNome: 'Saúde' },
    { segmentoId: 2, segmentoNome: 'Educação' },
    { segmentoId: 3, segmentoNome: 'Construção' },
  ]

  const formik = useFormik({
    initialValues,
    validationSchema: useSignUpSchema,
    onSubmit: () => handleSignUp(),
  })

  const handleSignUp = async () => {
    setLoading(true)
    try {
      await ClientService.createClient(formik.values)
      HandleNotification(typesNotification.SUCCESS, `Foi criado com sucesso!`)
      setLoading(false)
    } catch (err) {
      HandleNotification(
        typesNotification.ERROR,
        `Sua criação falhou entre em contato com o suporte! `,
      )
      setLoading(false)
    }
    setStep('2')
  }

  return {
    handleSignUp,
    loading,
    step,
    formik,
    selectedDate,
    segmentos,
    handleDateChange,
  }
}

export default useSignUp
