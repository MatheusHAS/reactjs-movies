import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './containers/rootSaga'
import rootReducer from './containers/rootReducer'
import { IApplicationState } from '@/domain/models'

const sagaMiddleware = createSagaMiddleware()
const store: Store<IApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store
