import { all, takeLatest } from 'redux-saga/effects'

import { MovieTypes } from '@/domain/models/IMovie'
import { load, loadDetail } from './movies/sagas'

export default function* rootSaga() {
  return yield all([takeLatest(MovieTypes.LOAD_REQUEST, load), takeLatest(MovieTypes.LOAD_DETAIL_REQUEST, loadDetail)])
}
