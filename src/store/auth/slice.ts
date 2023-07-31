import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthState, ICredentials } from './types'

export const initialState: IAuthState = {
  credentials: null,
  isLoading: false,
  error: false,
}

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLoading(state) {
      return {
        ...state,
        error: false,
        isLoading: false,
      }
    },

    authCredentials(state, action: PayloadAction<ICredentials>) {
      const credentials = {
        token: action.payload.token,
      }
      state.error = false
      state.credentials = credentials
      state.isLoading = false
    },

    authError(state) {
      return {
        ...state,
        error: true,
        isLoading: false,
      }
    },

    authLogout() {
      return {
        ...initialState,
      }
    },
  },
})

export const { authLoading, authCredentials, authError, authLogout } =
  auth.actions

export default auth.reducer
