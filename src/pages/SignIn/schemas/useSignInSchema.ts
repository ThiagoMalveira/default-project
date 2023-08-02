import * as Yup from 'yup'
import { InitialValues } from '../types'

export const useSignInSchema = Yup.object().shape({
  email: Yup.string()
    .required('Preencha seu e-mail')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Insira um e-mail válido!'),
  password: Yup.string(),
})

export const initialValues: InitialValues = {
  email: '',
  password: '',
}
