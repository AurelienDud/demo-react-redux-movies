import { createSlice, PayloadAction } from "@reduxjs/toolkit"

/**
 * Initial state
 */
const initialState:ProductState ={
  product: undefined,
  isOnLoad: false,
  isOnError: false
}

/**
 * Slice
 */
const slice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    /**
     * request
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetch_request (state, action:PayloadAction<{ id: string }>) {
      state.product = undefined
      state.isOnLoad = true
      state.isOnError = false
    },
    /**
     * success 
     */
    fetch_success (state, action:PayloadAction<{ product:Product }>) {
      state.product = action.payload.product
      state.isOnLoad = false
      state.isOnError = false
    },
    /**
     * fail
     */ 
    fetch_fail (state) {
      state.isOnLoad = false
      state.isOnError = true
    }
  }
})

/**
 * Export
 */
export default slice
