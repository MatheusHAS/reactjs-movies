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

export enum MovieTypes {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCESS = '@movies/LOAD_SUCCESS',
  LOAD_FAILURE = '@movies/LOAD_FAILURE',
}

export interface IMovieState {
  readonly data: IMovie[]
  readonly page: number
  readonly totalPages: number
  readonly totalResults: number
  readonly loading: boolean
  readonly error: boolean
}
