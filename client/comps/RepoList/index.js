import RepoList from './RepoList'
import { connect } from 'react-redux'
import * as repoListActions from '../../store/repoList/actions'

const props = (state) => {
  return {
    repoList: state.repoList,
    repoAdder: state.repoAdder,
  }
}

const actions = (dispatch) => {
  return {
    addRepoToList(repo) {
      dispatch(repoListActions.addRepoSuccess(repo))
    }
  }
}

export default connect(
  props,
  actions
)(RepoList)
