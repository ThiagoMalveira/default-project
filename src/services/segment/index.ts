import { HandleError } from '@resources/helpers/handleError'
import HandleNotification from '@resources/helpers/handleNotification'
import { HttpCodes } from '@resources/types/httpCode'
import { typesNotification } from '@resources/types/notification'
import { AxiosResponse } from 'axios'
import { endpoints, getApiHeader, getApiInstance } from '..'

export const SegmentService = {
  getSegment: async (): Promise<any> => {
    try {
      const api = getApiInstance()
      const header = getApiHeader()

      const response: AxiosResponse = await api.get(
        endpoints.URL.segment.getSegments,
        header,
      )

      if (![HttpCodes.SUCCESS].includes(response.status)) {
        HandleNotification(typesNotification.ERROR, 'Ocorreu algum problema!')
      }

      return response.data
    } catch (err) {
      HandleError(err)
    }
  },
}
