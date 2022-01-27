import { createSlice, PayloadAction } from "@reduxjs/toolkit"

/**
 * Initial state
 */
const initialState:ProductsState ={
  products: [],
  currentPage: undefined,
  isOnLoad: false,
  isAllLoad: false
}

/**
 * Slice
 */
const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    /**
     * request
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fetch_request (state, action:PayloadAction<undefined|{ page:number }>) {
      state.isOnLoad = true
    },
    /**
     * success 
     */
    fetch_success (state, action:PayloadAction<{ collection:ProductsCollection }>) {
      state.products = [...state.products, ...action.payload.collection.products]
      state.currentPage = action.payload.collection.page
      state.isAllLoad = action.payload.collection.page >= action.payload.collection.pages
      state.isOnLoad = false
    },
    /**
     * fail
     */ 
    fetch_fail (state) {
      state.isOnLoad = false
    }
  }
})

/**
 * Export
 */
export default slice
