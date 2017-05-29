import initialState from '../states/repoList'

export const repoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add_repo':
      return { ...state, repoList: [ ...state.repoList, action.repo ]}
      break;
    case 'remove_repo':
      return { ...state, repoList: [ ...state.repoList, targetRepo ]}
      break;
  }
}
