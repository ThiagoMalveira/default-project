import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISegmentType } from './types'

const initialState: ISegmentType = {
  segments: [],
  loading: false,
  error: false,
}

const segment = createSlice({
  name: 'segment',
  initialState,
  reducers: {
    segmentLoading(state) {
      return {
        ...state,
        error: false,
        loading: true,
      }
    },
    segmentSuccess(state, action: PayloadAction<any>) {
      return {
        ...state,
        segments: action.payload,
        error: false,
        loading: false,
      }
    },
    segmentError(state) {
      return {
        ...state,
        segments: [],
        error: true,
        loading: false,
      }
    },
  },
})

export const { segmentLoading, segmentSuccess, segmentError } = segment.actions

export default segment.reducer
