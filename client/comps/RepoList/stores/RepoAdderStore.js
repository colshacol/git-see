import { observable, action, computed } from 'mobx'

import { getRepo } from '@api/getRepo'

export default class RepoAdderStore {
  @observable inputValue = ''
  @observable stage = 0

  @computed get inputValidity() {
    console.log('Valdating...', !!this.inputValue.match(/\//))
    return !!this.inputValue.match(/\//)
  }

  constructor({ addRepoToList }) {
    this.addRepoToList = addRepoToList
  }

  @action updateInputValue = ({ target: { value }}) => {
    this.inputValue = value
  }

  @action stageUp = async () => {
    switch (this.stage === 0) {
      case true:
        this.stage = 1
        break;
      case false:
        if (!this.inputValidity) { return this.stage = 3 }
        else { this.stage = 2 }
        const repoData = await getRepo({ repoStr: this.inputValue })
        if (!repoData._id) { return this.stage = 4 }
        this.addRepoToList({ repoData })
        this.stage = 0
        this.inputValue = ''
        break;
    }
  }

  submitNewRepo = () => {
    console.log('TODO: Add new repo functionality.')
  }

  validateInput = () => {

  }
}
