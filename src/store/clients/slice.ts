import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initialState } from './initial'

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    clientInit(state) {
      return {
        ...state,
        client: [],
        clientLoading: true,
        clientError: undefined,
        clientSuccess: false,
        clientFail: false,
      }
    },

    clientSuccess(state, action: PayloadAction<any>) {
      return {
        ...state,
        client: action.payload,
        clientLoading: false,
        clientError: undefined,
        clientSuccess: true,
        clientFail: false,
      }
    },

    clientError(state, action: PayloadAction<unknown>) {
      return {
        ...state,
        client: [],
        clientLoading: false,
        clientError: action.payload,
        clientSuccess: false,
        clientFail: false,
      }
    },

    clientFail(state) {
      return {
        ...state,
        client: [],
        clientLoading: false,
        clientError: undefined,
        clientSuccess: false,
        clientFail: true,
      }
    },
  },
})

export const { clientInit, clientSuccess, clientError, clientFail } =
  clientSlice.actions

export default clientSlice.reducer
