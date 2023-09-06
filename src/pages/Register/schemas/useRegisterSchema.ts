import * as Yup from 'yup'
import { InitialValues } from '../types'

export const initialValues: InitialValues = {
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
