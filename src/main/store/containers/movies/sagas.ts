import { HttpRequest } from '@/data/protocols/http/HttpClient'
import { call, put } from 'redux-saga/effects'
import { makeAxiosHttpClient } from '@/main/factories/http/AxiosHttpFactory'
import { loadSuccess, loadFailure, loadDetailSuccess, loadDetailFailure } from './actions'
import { ApiEndpoints } from '@/main/store/containers/ApiEndpoints'

export function* load(props: any) {
  let token = localStorage.token
  if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

  const headerParams = {
    Accept: 'application/json',
    Authorization: token,
  }

  try {
    const httpRequest: HttpRequest = {
      url: `${ApiEndpoints.getTopRatedMovies(props.payload.page)}`,
      method: 'get',
      headers: headerParams,
    }
    const response = yield call(makeAxiosHttpClient().request, httpRequest)
    const { results, total_pages, total_results, page } = response.body
    yield put(loadSuccess(results, total_pages, total_results, page))
  } catch (err) {
    yield put(loadFailure())
  }
}

export function* loadDetail(props: any) {
  let token = localStorage.token
  if (!token) token = localStorage.token = Math.random().toString(36).substr(-8)

  const headerParams = {
    Accept: 'application/json',
    Authorization: token,
  }

  try {
    const httpRequest: HttpRequest = {
      url: `${ApiEndpoints.getMovieById(props.payload.movieId)}`,
      method: 'get',
      headers: headerParams,
    }
    const response = yield call(makeAxiosHttpClient().request, httpRequest)
    yield put(loadDetailSuccess(response.body))
  } catch (err) {
    yield put(loadDetailFailure())
  }
}
