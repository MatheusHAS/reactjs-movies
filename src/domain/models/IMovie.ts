export interface IMovie {
  id: string
  title: string
}

export enum MovieTypes {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCCES = '@movies/LOAD_SUCCCES',
  LOAD_FAILURE = '@movies/LOAD_FAILURE',
}

export interface IMovieState {
  readonly data: IMovie[]
  readonly loading: boolean
  readonly error: boolean
}
