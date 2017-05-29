import React, { Component } from 'react'
import { observer } from 'mobx-react'

import withStore from '@utils/withStore'
import { RepoListStore } from './stores'
import RepoAdder from './RepoAdder'
import Repo from '../Repo'
import css from './styles/index.styl'

const RepoList = observer(({ props, store }) => {
  console.log('RepoList: ', { props, store });
  return (
    <div className={css.RepoList}>
      {store.repos.map(repo => (
        <Repo {...repo} key={repo._id}/>
      ))}
      <RepoAdder addRepoToList={store.addRepoToList}/>
    </div>
  )
})

RepoList.displayName = 'RepoList'

export default withStore(RepoListStore)(RepoList)
