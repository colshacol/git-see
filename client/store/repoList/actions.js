import { ADD_REPO, REMOVE_REPO } from './consts'
import { getRepo } from '@api'

export const addRepoToList = (repoStr: string) => {
  return async (dispatch) => {
    const repo = await getRepo(repoStr)
    return dispatch(addRepoSuccess(await repo))
  }
}

export const addRepoSuccess = (repo) => {
  return {
    type: ADD_REPO,
    repo,
  }
}

const addRepoFailure = (repo) => {
  return {
    type: ADD_REPO,
    repo,
  }
}
