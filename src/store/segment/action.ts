import { AnyAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '@resources/types/store'
import { SegmentService } from '@services/segment'
import { segmentError, segmentLoading, segmentSuccess } from './slice'

type Segmento = {
  segmentoId: number
  segmentoNome: string
}

type ISegmentType = {
  segment: Segmento[]
}

export const fetchSegment = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    try {
      dispatch(segmentLoading())

      const response: ISegmentType = await SegmentService.getSegment()

      if (response) {
        dispatch(segmentSuccess(response))
        return
      }

      dispatch(segmentError())
    } catch (err) {
      dispatch(segmentError())
    }
  }
}
