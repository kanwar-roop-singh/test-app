import { applyMiddleware, createStore } from 'redux'
import { combineReducers } from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import reducer from './reducer'


const middleware = applyMiddleware(promise, thunk, logger)

const rootReducer = ( state, action ) => {
  if ( action.type === "CLEAR_STORE" ) {
    state = undefined;
  }
      
  return  combineReducers({
    reducer
})(state, action)
}

const store = createStore(rootReducer, middleware)
window.store = store
export default store

