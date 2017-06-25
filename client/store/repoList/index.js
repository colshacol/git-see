import initialState from './state'
import { ADD_REPO } from './consts'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_REPO:
      return { ...state, repoList: [ ...state.repoList, action.repo ]}
      break
    default:
      return state
  }
}
