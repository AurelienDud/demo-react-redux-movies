import axios, { AxiosResponse } from 'axios'
import { moviesToCollection, movieToProduct } from '@src/services/data/moviesTransformer'
import { YEAR_MS } from '@src/services/utils/timeUtils'

/**
 * Import the private API key from the .env
 * using ViteJs feature: https://vitejs.dev/guide/env-and-mode.html
 */
const MOVIE_API_KEY = import.meta.env.VITE_MOVIE_API_KEY

/**
 * MOVIES_API
 */
const API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    'Authorization': `Bearer ${MOVIE_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 100000,
  params: {
    "language" : "en-EN"
  }
})

/**
 * GET MOVIE
 */
export const getMovie = (id:string) => API.get<RawMovie, getMovieResponse>("movie/" + id, {
  transformResponse: (data => {
    return Object.hasOwnProperty.call(data, 'errors') ? data : movieToProduct(JSON.parse(data))
  })
})

export type getMovieResponse = AxiosResponse<Product>


/**
 * GET MOVIES
 */
export const getProductsCollection = (page?:number) => API.get<RawMovies, getProductsCollectionResponse>("discover/movie/", {
  params: {
    sort_by: 'release_date.desc', 
    'release_date.lte': new Date(Date.now() + YEAR_MS).toISOString().substring(0, 10),
    'release_date.gte': new Date(Date.now() - YEAR_MS).toISOString().substring(0, 10),
    "region": "FR",
    "with_original_language": "en",
    page
  },
  transformResponse: (data => Object.hasOwnProperty.call(data, 'errors') ? data : moviesToCollection(JSON.parse(data)))
})

export type getProductsCollectionResponse = AxiosResponse<ProductsCollection>
