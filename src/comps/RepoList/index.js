import React, { Component } from 'react'
import RepoAdder from './RepoAdder'
import Repo from '../Repo'
import './styles/index.css'

export default class RepoList extends Component {
  state = {
    repos: [0]
  };

  addRepo = (data) => {
    // Add a repo to the list.
    console.log('Adding?')
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
      <div className='RepoList'>
        {state.repos.map(repo => (
          <Repo/>
        ))}
        <RepoAdder addRepo={this.addRepo}/>
      </div>
    )
  }
}
