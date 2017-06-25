import React, { Component } from 'react'

import RepoAdder from './RepoAdder'
import Repo from '../Repo'
import css from './styles/index.styl'

const RepoList = (props) => {
  return (
    <div className={css.RepoList}>
      {props.repoList.map(repo => (
        <Repo {...repo} key={repo._id}/>
      ))}
      <RepoAdder
        addToRepoList_Success={props.addRepoToList}
      />
    </div>
  )
}

RepoList.displayName = 'RepoList'

export default RepoList
