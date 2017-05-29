import initialState from '../states/repoList'

export default repoAdderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'update_input_value':
      return state;
    default:
      return state;
  }
}
