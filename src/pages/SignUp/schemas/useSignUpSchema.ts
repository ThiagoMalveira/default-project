import * as Yup from 'yup'
import { InitialValues } from '../types'

const SegmentoSchema = Yup.object().shape({
  segmentoId: Yup.number().required('Campo obrigatório'),
  segmentoNome: Yup.string().required('Campo obrigatório'),
})

function isCNPJValid(cnpj: string): boolean {
  const cleanCNPJ = cnpj.replace(/[^\d]/g, '') // Remove caracteres não numéricos
  if (cleanCNPJ.length !== 14) return false

  return true
}

export const useSignUpSchema = Yup.object().shape({
  clienteCnpj: Yup.string()
    .required('Campo obrigatório!')
    .test('valid-cnpj', 'CNPJ inválido', (value) => {
      if (!value) return false

      return isCNPJValid(value)
    }),
  clienteDataFundacao: Yup.string().required('Campo obrigatório!'),
  clienteInscricaoMunicipal: Yup.number()
    .required('Campo obrigatório!')
    .typeError('Utilize apenas números'),
  clienteInscricaoEstadual: Yup.number()
    .required('Campo obrigatório!')
    .typeError('Utilize apenas números'),
  capacidadeEntrega: Yup.string().required('Campo obrigatório!'),
  clienteEmailComercial: Yup.string().required('Campo obrigatório!'),
  clienteTelefoneComercial: Yup.string(),
  segmento: Yup.array()
    .of(SegmentoSchema)
    .min(1, 'Selecione pelo menos uma opção')
    .required('Campo obrigatório'),
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
      segmentoId: 0,
      segmentoNome: '',
    },
  ],
}
