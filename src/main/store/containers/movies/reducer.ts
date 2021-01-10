import { Reducer } from 'redux'
import { MovieTypes, IMovieState, IMovie } from '@/domain/models'
import env from '@/main/config/environment'

const INITIAL_STATE: IMovieState = {
  list: {
    data: [],
    error: false,
    loading: false,
    page: 0,
    totalPages: 0,
    totalResults: 0,
  },
  detail: {
    data: null,
    error: false,
    loading: false,
  },
}

const reducer: Reducer<IMovieState> = (state = INITIAL_STATE, action) => {
  const { list, detail } = state
  switch (action.type) {
    case MovieTypes.LOAD_REQUEST:
      return { ...state, list: { ...list, loading: true } }
    case MovieTypes.LOAD_SUCCESS:
      const { results, totalPages, totalResults, page } = action.payload
      return {
        ...state,
        list: {
          ...list,
          loading: false,
          error: false,
          data: [
            ...state.list.data,
            ...results.map((result: IMovie) => {
              if (result.backdrop_path) {
                result.backdrop_path = `${env.IMAGE_PREFIX_BG}${result.backdrop_path}`
              }
              if (result.poster_path) {
                result.poster_path = `${env.IMAGE_PREFIX_URL}${result.poster_path}`
              }
              return result
            }),
          ],
          totalPages,
          totalResults,
          page,
        },
      }
    case MovieTypes.LOAD_FAILURE:
      return {
        ...state,
        list: {
          ...list,
          loading: false,
          error: true,
          data: [],
        },
      }

    case MovieTypes.LOAD_DETAIL_REQUEST:
      return { ...state, detail: { ...detail, loading: true } }
    case MovieTypes.LOAD_DETAIL_SUCCESS:
      const { result } = action.payload
      if (result.production_companies) {
        result.production_companies = result.production_companies.map((company: any) => {
          return {
            ...company,
            logo_path: company.logo_path ? `${env.IMAGE_PREFIX_W200}${company.logo_path}` : null,
          }
        })
      }
      return {
        ...state,
        detail: {
          ...detail,
          loading: false,
          error: false,
          data: result,
        },
      }
    case MovieTypes.LOAD_DETAIL_FAILURE:
      return {
        ...state,
        detail: {
          ...detail,
          loading: false,
          error: true,
          data: null,
        },
      }

    default:
      return state
  }
}

export default reducer
