import { all } from 'redux-saga/effects'
import productsEffects from '@src/store/effects/productsEffects'
import productEffects from '@src/store/effects/productEffects'

/**
 * Merge effects fields together
 */
export default function* rootSaga () {
  yield all([
    productEffects(),
    productsEffects()
  ])
}