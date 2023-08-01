import * as Yup from 'yup'
import { InitialValues } from '../types'

export const useSignUpSchema = Yup.object().shape({
  email: Yup.string()
    .required('Campo obrigatório')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Insira um e-mail válido!'),
  password: Yup.string().required('Campo obrigatório'),
})

export const initialValues: InitialValues = {
  clienteCnpj: '',
  clienteDataFundacao: '',
  clienteInscricaoMunicipal: null,
  clienteInscricaoEstadual: null,
  capacidadeEntrega: '',
  clienteEmailComercial: '',
  clienteTelefoneComercial: '',
  segmentos: [
    {
      segmentoId: null,
      segmentoNome: '',
    },
  ],
}
