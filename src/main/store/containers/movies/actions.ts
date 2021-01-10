import { action } from 'typesafe-actions'
import { IMovie, MovieTypes } from '@/domain/models'

export const loadRequest = (page: number = 1) => action(MovieTypes.LOAD_REQUEST, { page })
export const loadSuccess = (results: IMovie[], totalPages = 0, totalResults = 0, page = 0) =>
  action(MovieTypes.LOAD_SUCCESS, { results, totalPages, totalResults, page })
export const loadFailure = () => action(MovieTypes.LOAD_FAILURE)

export const loadDetailRequest = (movieId: number) => action(MovieTypes.LOAD_DETAIL_REQUEST, { movieId })
export const loadDetailSuccess = (result: IMovie) => action(MovieTypes.LOAD_DETAIL_SUCCESS, { result })
export const loadDetailFailure = () => action(MovieTypes.LOAD_DETAIL_FAILURE)
