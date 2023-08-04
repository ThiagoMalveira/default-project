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
  clienteDataFoundation: Yup.string().required('Campo obrigatório!'),
  clienteInscricaoMunicipal: Yup.number()
    .required('Campo obrigatório!')
    .typeError('Utilize apenas números'),
  clienteInscricaoEstadual: Yup.number()
    .required('Campo obrigatório!')
    .typeError('Utilize apenas números'),
  capacidadeEntrega: Yup.string().required('Campo obrigatório!'),
  clienteEmailComercial: Yup.string()
    .required('Campo obrigatório!')
    .matches(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i, 'E-mail inválido!'),
  clienteTelefoneComercial: Yup.string().matches(
    /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/g,
    'Telefone inválido!',
  ),
  segmento: Yup.array()
    .of(SegmentoSchema)
    .min(1, 'Selecione pelo menos uma opção')
    .required('Campo obrigatório'),
})

export const initialValues: InitialValues = {
  clienteCnpj: '',
  clienteDataFoundation: '',
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
