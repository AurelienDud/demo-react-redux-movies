import defaultPoster from '@src/assets/images/favicon.svg'

const IMAGE_BASEPATH = "https://image.tmdb.org/t/p/w500"

/**
 * Transform raw movie into a product
 */
export function movieToProduct (movie:RawMovie):Product {
  return {
    id: movie.id?.toString() || '',
    title: movie.title || '',
    date: movie.release_date ? Date.parse(movie.release_date) : undefined,
    release_date: movie.release_date || undefined,
    overview: movie.overview || '',
    poster_image: typeof movie.poster_path === 'string' ? IMAGE_BASEPATH.concat(movie.poster_path): defaultPoster,
    backdrop_image: typeof movie.backdrop_path === 'string' ? IMAGE_BASEPATH.concat(movie.backdrop_path): defaultPoster
  }  
}

/**
 * Transform raw movies list into products
 */
export function moviesToProducts (movies:RawMovies["results"]):Products {
  return movies?.map(movie => movieToProduct(movie)) || []
}

/**
 * Transform the raw object into a structured collection
 */
export function moviesToCollection (data: RawMovies):ProductsCollection {
  return {
    page: data.page || 1,
    pages: data.total_pages || 1,
    products: moviesToProducts(data.results)
  }
}