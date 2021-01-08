import env from '@/main/config/environment'

const getUrlWithToken = (path: string) => `${env.API_ENDPOINT}${path}?api_key=${env.API_TOKEN}&language=pt-BR`

export const ApiEndpoints = {
  getPopularMovies: () => getUrlWithToken('/movie/popular'),
  getMovieById: (MovieId: number) => getUrlWithToken(`/movie/${MovieId}`),
  getSimilarMoviesById: (MovieId: number) => getUrlWithToken(`/movie/${MovieId}/similar`),
  getTopRatedMovies: () => getUrlWithToken('/movie/top_rated'),
}
