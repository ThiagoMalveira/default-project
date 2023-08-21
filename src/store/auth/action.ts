import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '@resources/types/store'
import { AuthService } from '@services/auth'
import { authCredentials, authError, authLoading } from './slice'
import { IPayload } from './types'

export function fetchAuth(
  payload: IPayload,
): ThunkAction<void, RootState, undefined, AnyAction> {
  return async (dispatch) => {
    dispatch(authLoading())

    const { email, password } = payload

    try {
      const result = await AuthService.signIn(email, password)

      if (!result) return dispatch(authError())

      dispatch(authCredentials(result))
    } catch (err) {
      console.log(err)
      dispatch(authError())
    }
  }
}
