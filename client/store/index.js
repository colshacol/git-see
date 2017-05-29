import { createStore, combineReducers } from 'redux'
import { repoListReducer, repoAdderReducer } from './reducers'

export const initialState = {
    repoList: [],
    repoAdder: {
      stage: 0,
      inputValue: ''
    }
}

const reducers = combineReducers({
  repoList: repoListReducer,
  repoAdder: repoAdderReducer,
})

export default createStore(reducers, initialState)
