import env from '@/main/config/environment'

export const ApiEndpoints = {
  getPopularMovies: () => `${env.API_ENDPOINT}/movie/popular`,
  getMovieById: (MovieId: number) => `${env.API_ENDPOINT}/movie/${MovieId}`,
  getSimilarMoviesById: (MovieId: number) => `${env.API_ENDPOINT}/movie/${MovieId}/similar`,
  getTopRatedMovies: () => `${env.API_ENDPOINT}/movie/top_rated`,
}
