import { action } from 'typesafe-actions'
import { IMovie, MovieTypes } from '@/domain/models'

export const loadRequest = () => action(MovieTypes.LOAD_REQUEST)
export const loadSuccess = (data: IMovie[]) => action(MovieTypes.LOAD_SUCCCES, { data })
export const loadFailure = () => action(MovieTypes.LOAD_FAILURE)
