import { observable, action, computed } from 'mobx'

export default class RepoStore {
  @observable view: number = 0
  repoName
  owner
  currentStats
  pastWeek
  pastMonth
  averages
  url

  constructor(repoData) {
    console.log({ repoData })
    this._id = repoData._id
    this.repoName = repoData.reponame
    this.owner = repoData.owner
    this.yesterday = repoData.yesterday
    this.currentStats = repoData.currentStats
    this.pastWeek = repoData.pastWeek
    this.pastMonth = repoData.pastMonth
    this.averages = repoData.averages
    this.url = repoData.url
  }

  @action swapViews = () => {
    this.views = !!(this.views === 0) ? 1 : 0
  }
}
