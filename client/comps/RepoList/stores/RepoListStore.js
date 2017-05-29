import { observable, action } from 'mobx'

export default class RepoListStore {
  @observable repos = []

  @action addRepoToList = ({ repoData }) => {
    this.repos.push(repoData)
  }

  @action removeRepoFromList = ({ repoId }) => {
    this.repos = this.repos.filter(repo => repo.id != repoId)
  }

  // TODO: Add sortRepos functionality.
}
