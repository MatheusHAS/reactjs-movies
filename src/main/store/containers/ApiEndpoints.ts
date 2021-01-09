import env from '@/main/config/environment'

const getUrlWithToken = (path: string, params: string = '') =>
  `${env.API_ENDPOINT}${path}?api_key=${env.API_TOKEN}&language=pt-BR${params ? `&${params}` : ''}`

export const ApiEndpoints = {
  getPopularMovies: () => getUrlWithToken('/movie/popular'),
  getMovieById: (MovieId: number) => getUrlWithToken(`/movie/${MovieId}`),
  getSimilarMoviesById: (MovieId: number) => getUrlWithToken(`/movie/${MovieId}/similar`),
  getTopRatedMovies: (page = 1) => getUrlWithToken('/movie/top_rated', `page=${page}`),
}
