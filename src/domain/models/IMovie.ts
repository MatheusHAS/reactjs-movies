export interface IMovie {
  id: number
  title: string
  overview?: string
  poster_path?: string
  release_date?: string
  backdrop_path?: string
  original_language?: string
  vote_average?: number
  adult?: boolean
  genre_ids?: number[]
  video?: boolean
  popularity?: number
}

export interface IMovieProductionCompany {
  name?: string
  id?: number
  logo_path?: string | null
  origin_country?: string | null
}

export interface IMovieProductionCountry {
  iso_3166_1?: string
  name?: string
}

export interface IMovieGenre {
  id?: number
  name?: string
}

export interface IMovieDetail {
  id: number
  genres: IMovieGenre[]
  production_companies: IMovieProductionCompany[]
  production_countries: IMovieProductionCountry[]
  vote_average?: number
  vote_count?: number
  imdb_id?: string | null
}

export enum MovieTypes {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCESS = '@movies/LOAD_SUCCESS',
  LOAD_FAILURE = '@movies/LOAD_FAILURE',
  LOAD_DETAIL_REQUEST = '@movie_detail/LOAD_REQUEST',
  LOAD_DETAIL_SUCCESS = '@movie_detail/LOAD_SUCCESS',
  LOAD_DETAIL_FAILURE = '@movie_detail/LOAD_FAILURE',
}

export interface IMovieListState {
  readonly data: IMovie[]
  readonly page: number
  readonly totalPages: number
  readonly totalResults: number
  readonly loading: boolean
  readonly error: boolean
}

export interface IMovieDetailState {
  readonly data: IMovieDetail
  readonly loading: boolean
  readonly error: boolean
}

export interface IMovieState {
  readonly list: IMovieListState
  readonly detail: IMovieDetailState
}
