import { Reducer } from 'redux'
import { MovieTypes, IMovieState, IMovie } from '@/domain/models'
import env from '@/main/config/environment'

const INITIAL_STATE: IMovieState = {
  data: [],
  error: false,
  loading: false,
  page: 0,
  totalPages: 0,
  totalResults: 0,
}

const reducer: Reducer<IMovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case MovieTypes.LOAD_SUCCESS:
      const { results, totalPages, totalResults, page } = action.payload
      return {
        ...state,
        loading: false,
        error: false,
        data: results.map((result: IMovie) => {
          if (result.backdrop_path) {
            result.backdrop_path = `${env.IMAGE_PREFIX_BG}${result.backdrop_path}`
          }
          if (result.poster_path) {
            result.poster_path = `${env.IMAGE_PREFIX_URL}${result.poster_path}`
          }
          return result
        }),
        totalPages,
        totalResults,
        page,
      }
    case MovieTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      }
    default:
      return state
  }
}

export default reducer
