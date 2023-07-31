import { HttpCodes } from '@resources/types/httpCode'
import {
  IAuthSignInResponse,
  initialAuthState,
} from '@resources/types/services'
import { getApiHeader, getApiInstance } from '@services/api'
import { endpoints } from '@services/endpoints'
import { AxiosResponse } from 'axios'
import { IRequest } from './types'

export const AuthService = {
  signIn: async (
    email: string,
    password: string,
  ): Promise<IAuthSignInResponse> => {
    const api = getApiInstance()

    const header = getApiHeader()

    const payload: IRequest = {
      email,
      password,
    }

    const response: AxiosResponse = await api.post(
      endpoints.URL.auth.signIn,
      payload,
      header,
    )

    if (![HttpCodes.SUCCESS, HttpCodes.CREATED].includes(response.status)) {
      return initialAuthState
    }

    return response.data
  },
}
