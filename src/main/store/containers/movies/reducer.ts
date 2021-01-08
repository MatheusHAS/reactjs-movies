import { Reducer } from 'redux'
import { MovieTypes, IMovieState } from '@/domain/models'

const INITIAL_STATE: IMovieState = {
  data: [],
  error: false,
  loading: false,
}

const reducer: Reducer<IMovieState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MovieTypes.LOAD_REQUEST:
      return { ...state, loading: true }
    case MovieTypes.LOAD_SUCCCES:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
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
