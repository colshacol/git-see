import initialState from '../states/repoList'

export const repoAdderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update_input_value':
      return state;
    default:
      return state;
  }
}
