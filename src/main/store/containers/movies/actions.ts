import { action } from 'typesafe-actions'
import { IMovie, MovieTypes } from '@/domain/models'

export const loadRequest = () => action(MovieTypes.LOAD_REQUEST)
export const loadSuccess = (results: IMovie[], totalPages = 0, totalResults = 0, page = 0) =>
  action(MovieTypes.LOAD_SUCCESS, { results, totalPages, totalResults, page })
export const loadFailure = () => action(MovieTypes.LOAD_FAILURE)
