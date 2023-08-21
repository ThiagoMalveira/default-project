import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IAuthState } from './types'

export const initialState: IAuthState = {
  user: {
    id: null,
    email: '',
    role: [],
    accesstoken: '',
    tokenType: '',
  },
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

    authCredentials(state, action: PayloadAction<any>) {
      return {
        ...state,
        user: action.payload,
        error: false,
        credentials: action.payload.accessToken,
        isLoading: false,
      }
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
