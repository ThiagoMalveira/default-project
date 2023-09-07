import * as Yup from 'yup'
import { InitialValuesBank, InitialValuesShipping } from '../types'

export const initialValuesShipping: InitialValuesShipping = {
  uf: '',
  peso: '',
  comprimento: '',
  altura: '',
  largura: '',
  prazo_min: '',
  prazo_max: '',
  shipping_value: 0,
  free_shipping: 0,
}

export const initialValuesBank: InitialValuesBank = {
  bank: '',
  type: '',
  agency: '',
  accountNumber: '',
}

export const useBankAccountSchema = Yup.object().shape({
  bank: Yup.string().required('Campo obrigatório'),
  type: Yup.string().required('Campo obrigatório'),
  agency: Yup.string().required('Campo obrigatório'),
  accountNumber: Yup.string().required('Campo obrigatório'),
})

export const useRegisterSchema = Yup.object().shape({
  uf: Yup.string().required('Campo obrigatório').max(2),
  peso: Yup.string().required('Campo obrigatório'),
  comprimento: Yup.string().required('Campo obrigatório'),
  altura: Yup.string().required('Campo obrigatório'),
  largura: Yup.string().required('Campo obrigatório'),
  prazo_min: Yup.string().required('Campo obrigatório'),
  prazo_max: Yup.string().required('Campo obrigatório'),
  shipping_value: Yup.string().required('Campo obrigatório'),
  free_shipping: Yup.string().required('Campo obrigatório'),
})
