import React, { Component } from 'react'
import { connect } from 'react-redux'

import RepoAdder from './RepoAdder'
import Repo from '../Repo'
import css from './styles/index.styl'

class RepoList extends Component {
  state = {
    repos: []
  };

  addRepo = (data) => {
    this.setState(({ repos }) => ({
      repos: [ ...repos, data ]
    }))
  }

  removeRepo = () => {
    // Remove a repo from the list.
  }

  render({ props, state } = this) {
    console.log('Rendering repo list', this.state)
    return (
      <div className={css.RepoList}>
        {state.repos.map(repo => (
          <Repo {...repo} />
        ))}
        <RepoAdder addRepo={this.addRepo}/>
      </div>
    )
  }
}

export default connect(store => ({
  repoList: store.repoList,
}))(RepoList)
