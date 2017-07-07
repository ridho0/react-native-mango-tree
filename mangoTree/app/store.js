import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

import bookReducer from '../reducers/bookReducer'

const middlewares = applyMiddleware(logger, thunk)

const store = createStore(bookReducer, compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

export default store
