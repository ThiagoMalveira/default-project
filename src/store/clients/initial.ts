import { IClientInitialState } from './types'

export const initialState: IClientInitialState = {
  client: [],
  clientLoading: false,
  clientError: undefined,
  clientSuccess: false,
  clientFail: false,
}
