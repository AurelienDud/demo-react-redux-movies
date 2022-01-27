import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from 'redux-saga'
import effects from '@src/store/effects'
import { reducers, actions } from "@src/store/slices"

/**
 * Init middlewares
 */
const sagaMiddleware = createSagaMiddleware()
 
/**
 * Create the store
 */
const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware)
})

/**
 * Run middlewares
 */
sagaMiddleware.run(effects)

/**
 * Exports
 */
export { store as default, actions }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch