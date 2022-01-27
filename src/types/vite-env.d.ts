/// <reference types="vite/client" />

/**
 * REDUX-SAGA 
 * All in one type of generator function
 * the first generic define the action params
 * the three others are the yielded value, the returned type then the type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface SagaGenerator<P extends (...args: any) => any, N, R = void, T = unknown> {
  (action:ReturnType<P>): Generator<T, R, N>
}

/**
 * MOVIE API
 * Expose types from auto-generated schema
 */
 declare type RawMovies = import('./generated-schema-tmdb').operations["GET_discover-movie"]["responses"]["200"]["schema"]
 declare type RawMovie = import('./generated-schema-tmdb').definitions["movie-list-object"]
 
 /**
  * STORE
  */
declare interface ProductsState {
  products: Products,
  currentPage?: number,
  isOnLoad: boolean,
  isAllLoad: boolean
} 

declare interface ProductState {
  product?: Product,
  isOnLoad: boolean,
  isOnError: boolean
}
 
/**
 * DTO
 */
declare interface ProductsCollection {
  page: number, 
  pages: number,
  products: Products
}

/**
 * APP
 */
declare type Products = Product[]

declare interface Product {
  id: string,
  title: string,
  date: number|undefined,
  overview: string,
  poster_image: string,
  release_date: string|undefined,
  backdrop_image: string
}
