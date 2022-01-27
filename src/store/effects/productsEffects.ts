import { call, put, takeLatest } from 'redux-saga/effects'
import { getProductsCollection, getProductsCollectionResponse } from '@src/services/api/moviesApi'
import { actions } from "@src/store"

/**
 * fetch the products data from the API
 */
export const fetchProducts = function* ({ payload }) {
   try {
      const { data } = yield call(getProductsCollection, payload?.page || 1)
      // on success
      yield put(actions.products.fetch_success({ collection: data }))
   } catch {
      // on fail
      yield put(actions.products.fetch_fail())
   }
} as SagaGenerator<typeof actions.products.fetch_request, getProductsCollectionResponse>

/**
 * Observer
 */
export default function* () { 
   yield takeLatest(actions.products.fetch_request, fetchProducts)  
}
 