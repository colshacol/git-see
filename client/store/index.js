import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import repoListReducer from './repoList'

export const initialState = {
    repoList: [],
}

// const reducers = combineReducers({
//   repoList: repoListReducer,
// })

const middleware = applyMiddleware(thunk)

export default createStore(repoListReducer, initialState, middleware)
