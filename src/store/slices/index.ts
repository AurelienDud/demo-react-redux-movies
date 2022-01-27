import productsSlice from "@src/store/slices/productsSlice"
import productSlice from "@src/store/slices/productSlice"


export const reducers = {
  products: productsSlice.reducer,
  product: productSlice.reducer
}

export const actions = {
  products: productsSlice.actions,
  product: productSlice.actions
}