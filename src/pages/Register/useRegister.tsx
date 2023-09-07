import { IGridData, IGridHeader } from '@components/DataGridPartners/types'
import { FontType } from '@components/UI/Typography'
import { useHandleNavigate } from '@hooks/useHandleNavigate'
import { theme } from '@resources/theme'
import PathRoutes from '@route/PathRoutes'
import { useFormik } from 'formik'
import { useEffect, useState } from 'react'
import {
  initialValuesBank,
  initialValuesShipping,
  useBankAccountSchema,
  useRegisterSchema,
} from './schemas/useRegisterSchema'

const useRegister = () => {
  const { handleNavigate } = useHandleNavigate()
  const [data, setData] = useState<IGridData[]>([])
  const [termAccepted, setTermAccepted] = useState<boolean>(false)
  const [existBankAccount, setExistBankAccount] = useState<boolean>(false)
  const [isShippingInserted, setIsShippingInserted] = useState<boolean>(false)
  // Status modals
  const [modalContract, setModalContract] = useState<boolean>(false)
  const [modalShipping, setModalShipping] = useState<boolean>(false)
  const [modalBankAccount, setModalBankAccount] = useState<boolean>(false)
  const [stepShipping, setStepShipping] = useState(1)

  // Status Cards
  const [statusContract, setStatusContract] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [statusShipping, setStatusShipping] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')
  const [statusBankAccount, setStatusBankAccount] = useState<
    'PENDENTE' | 'CONCLUIDO'
  >('PENDENTE')

  // All close and complete
  const handleCloseAndCompleteModalContract = () => {
    setModalContract(false)
    setTermAccepted(true)
    setStatusContract('CONCLUIDO')
  }

  const handleCloseAndCompleteModalShipping = () => {
    setModalShipping(false)
    setStatusShipping('CONCLUIDO')
    setIsShippingInserted(true)
    setStepShipping(1)
  }

  const handleCloseAndCompleteModalBankAccount = () => {
    setModalBankAccount(false)
    setStatusBankAccount('CONCLUIDO')
  }

  // All close only

  const handleCloseModalContract = () => {
    setModalContract(false)
  }

  const handleCloseModalShipping = () => {
    setModalShipping(false)
    setStepShipping(1)
  }

  const handleCloseModalBankAccount = () => {
    setModalBankAccount(false)
  }
  // All open modals

  const handleOpenModalShipping = () => {
    setModalShipping(true)
  }

  const handleOpenModalContract = () => {
    setModalContract(true)
  }

  const handleOpenModalBankAccount = () => {
    setModalBankAccount(true)
  }

  const nextStepShipping = () => {
    setStepShipping(stepShipping + 1)
  }

  const previousStepShipping = () => {
    setStepShipping(stepShipping - 1)
  }

  const forms = useFormik({
    initialValues: initialValuesShipping,
    validationSchema: useRegisterSchema,
    onSubmit: () => handleAddLine(),
    validateOnBlur: false,
    validateOnChange: false,
  })

  const formik = useFormik({
    initialValues: initialValuesBank,
    validationSchema: useBankAccountSchema,
    onSubmit: () => handleAddBankAccount(),
    validateOnBlur: false,
    validateOnChange: false,
  })

  const handleAddBankAccount = () => {
    handleCloseAndCompleteModalBankAccount()
    formik.resetForm()
    setExistBankAccount(true)
    console.log('enviado pra API :D')
  }

  const handleAddLine = () => {
    const newData = {
      id: data.length + 1,
      select: '',
      action: '',
      values: {
        ...forms.values,
      },
    }

    setData([...data, newData])
    forms.resetForm()
    setIsShippingInserted(true)
    setStepShipping(stepShipping - 1)
  }

  useEffect(() => {
    if (isShippingInserted && termAccepted && existBankAccount) {
      handleNavigate(PathRoutes.PRODUCTS_REGISTER)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShippingInserted, termAccepted, existBankAccount])

  const header: IGridHeader[] = [
    {
      label: 'UF',
      grid: 1,
      action: () => null,
      order: false,
      value: 'uf',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.bold,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'PESO (KG)',
      grid: 6,
      action: () => null,
      order: true,
      value: 'peso',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'COMPRIMENTO (CM)',
      grid: 11,
      action: () => null,
      order: false,
      value: 'comprimento',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'ALTURA (CM)',
      grid: 7,
      action: () => null,
      order: false,
      value: 'altura',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'LARGURA (CM)',
      grid: 7,
      action: () => null,
      order: false,
      value: 'largura',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'PRAZO MIN',
      grid: 5,
      action: () => null,
      order: false,
      value: 'prazo_min',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'PRAZO MAX',
      grid: 7,
      action: () => null,
      order: false,
      value: 'prazo_max',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'VALOR FRETE',
      grid: 8,
      action: () => null,
      order: false,
      value: 'shipping_value',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
    {
      label: 'FAIXA GRÁTIS',
      grid: 8,
      action: () => null,
      order: false,
      value: 'free_shipping',
      field: 'value',
      styles: {
        align: 'left',
        fontType: FontType.regular,
        fontSize: 12,
        color: `${theme.palette.secondary.dark}`,
      },
    },
  ]

  return {
    statusBankAccount,
    statusShipping,
    statusContract,
    // Modal status
    modalContract,
    modalShipping,
    modalBankAccount,
    // Handle close and complete
    handleCloseAndCompleteModalShipping,
    handleCloseAndCompleteModalBankAccount,
    handleCloseAndCompleteModalContract,
    // Handle close only
    handleCloseModalContract,
    handleCloseModalShipping,
    handleCloseModalBankAccount,
    // handle Open modals
    handleOpenModalBankAccount,
    handleOpenModalContract,
    handleOpenModalShipping,
    // Steps
    nextStepShipping,
    previousStepShipping,
    stepShipping,
    header,
    data,
    handleAddLine,
    forms,
    formik,
  }
}

export default useRegister
