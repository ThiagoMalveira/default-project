import { HandleError } from '@resources/helpers/handleError'
import HandleNotification from '@resources/helpers/handleNotification'
import { HttpCodes } from '@resources/types/httpCode'
import { typesNotification } from '@resources/types/notification'
import { AxiosResponse } from 'axios'
import { endpoints, getApiHeader, getApiInstance } from '..'
import { IRequestClient } from './types'

export const ClientService = {
  createClient: async ({
    capacidadeEntrega,
    clienteCnpj,
    clienteEmailComercial,
    clienteInscricaoEstadual,
    clienteInscricaoMunicipal,
    clienteTelefoneComercial,
    clienteDataFundacao,
    segmentos,
  }: IRequestClient): Promise<any> => {
    try {
      const api = getApiInstance()

      const header = getApiHeader()

      const payload: IRequestClient = {
        capacidadeEntrega,
        clienteCnpj,
        clienteEmailComercial,
        clienteInscricaoEstadual,
        clienteInscricaoMunicipal,
        clienteTelefoneComercial,
        clienteDataFundacao,
        segmentos,
      }

      const response: AxiosResponse = await api.post(
        endpoints.URL.clients.createClient,
        payload,
        header,
      )

      if (![HttpCodes.CREATED].includes(response.status)) {
        HandleNotification(typesNotification.ERROR, 'Ocorreu algum problema!')
      }

      return response.data
    } catch (err) {
      HandleError(err)
    }
  },
}
