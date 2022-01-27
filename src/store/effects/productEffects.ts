import { call, put, takeLatest } from 'redux-saga/effects'
import { getMovie, getMovieResponse } from '@src/services/api/moviesApi'
import { actions } from "@src/store"

/**
 * fetch the product data from the API
 */
export const fetchProduct = function* ({ payload }) {
   try {
      const { data } = yield call(getMovie, payload.id)
      // on success
      yield put(actions.product.fetch_success({ product: data }))
   } catch {
      // on fail
      yield put(actions.product.fetch_fail())
   }
} as SagaGenerator<typeof actions.product.fetch_request, getMovieResponse>

/**
 * Observer
 */
export default function* () { 
   yield takeLatest(actions.product.fetch_request, fetchProduct)  
}
 