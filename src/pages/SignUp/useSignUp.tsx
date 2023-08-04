import { useAppDispatch, useAppSelector } from '@hooks/store'
import HandleNotification from '@resources/helpers/handleNotification'
import { typesNotification } from '@resources/types/notification'
import { ClientService } from '@services/client'
import { IRequestClient } from '@services/client/types'
import { fetchSegment } from '@store/segment/action'
import dayjs from 'dayjs'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import { initialValues, useSignUpSchema } from './schemas/useSignUpSchema'

const useSignUp = () => {
  const [step, setStep] = useState<string>('1')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const { segments } = useAppSelector((state) => state.segment)

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? dayjs(date).format('DD/MM/YYYY') : ''
    setSelectedDate(formattedDate)
    formik.setFieldValue('clienteDataFoundation', formattedDate)
  }

  useEffect(() => {
    dispatch(fetchSegment())
  }, [dispatch])

  const formik = useFormik({
    initialValues,
    validationSchema: useSignUpSchema,
    onSubmit: () => handleSignUp(),
  })

  const handleSignUp = async () => {
    setLoading(true)
    try {
      const {
        capacidadeEntrega,
        clienteCnpj,
        clienteEmailComercial,
        clienteInscricaoEstadual,
        clienteInscricaoMunicipal,
        clienteTelefoneComercial,
        clienteDataFoundation,
        segmentos,
      } = formik.values

      const clienteDataFundacao = clienteDataFoundation
        ? dayjs(clienteDataFoundation).format('YYYY-MM-DD')
        : ''

      const data: IRequestClient = {
        capacidadeEntrega,
        clienteCnpj,
        clienteEmailComercial,
        clienteInscricaoEstadual,
        clienteInscricaoMunicipal,
        clienteTelefoneComercial,
        clienteDataFundacao,
        segmentos,
      }

      await ClientService.createClient(data)
      HandleNotification(typesNotification.SUCCESS, `Foi criado com sucesso!`)
      setLoading(false)

      setStep('2')
      formik.resetForm()
    } catch (err) {
      HandleNotification(
        typesNotification.ERROR,
        `Sua criação falhou entre em contato com o suporte! `,
      )
      setLoading(false)
    }
  }

  return {
    handleSignUp,
    loading,
    step,
    formik,
    selectedDate,
    segments,
    handleDateChange,
  }
}

export default useSignUp
