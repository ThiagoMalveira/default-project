import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '@resources/types/store'

import { ClientService } from '@services/client'
import { clientError, clientFail, clientInit, clientSuccess } from './slice'

export const fetchClients = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    try {
      dispatch(clientInit())

      const response = await ClientService.getClients()

      console.log(response)

      if (response) {
        dispatch(clientSuccess(response))

        return
      }

      dispatch(clientFail())
    } catch (err) {
      dispatch(clientError(err))
    }
  }
}
