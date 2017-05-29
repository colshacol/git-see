import React, { Component } from "react"
import { observer } from 'mobx-react'

import withStore from '@utils/withStore'
import { RepoAdderStore } from './stores'
import { Icon } from "react-fa"
import css from "./styles/RepoAdder.styl"

const RepoAdder = observer(({ props, store }) => {
  return (
    <div className={css.RepoAdder}>
      {!!(store.stage === 0) &&
        <div className={css.stage0} onClick={store.stageUp}>
          <Icon name="plus-circle" className={css.plusIcon} />
          <p>Add a repo to compare.</p>
        </div>}
      {!!(store.stage > 0) &&
        <div className={css.activeStage}>
          <div className={css.activeStageTop}>
            <input
              value={store.inputValue}
              placeholder="owner/repo"
              className={css.search}
              onChange={store.updateInputValue}
            />
            <div className={css.submitButton} onClick={store.stageUp}>
              GET STATS
            </div>
          </div>
          <div className={css.activeStageBottom}>
            <Choose>
              <When condition={store.stage === 1}>
                <p>
                  Type a userName/repoName above to
                  add it to the list.
                </p>
              </When>
              <When condition={store.stage === 2}>
                <p>
                  Searching for that repo...
                </p>
              </When>
              <When condition={store.stage === 3}>
                <p>
                  That search value is invalid.
                </p>
              </When>
              <When condition={store.stage === 4}>
                <p>
                  Uh oh, we're not watching that repo.
                </p>
                <a onClick={store.submitNewRepo}>
                  <h3>
                    Add it now?
                  </h3>
                </a>
              </When>
            </Choose>
          </div>
        </div>}
    </div>
  )
})

export default withStore(RepoAdderStore)(RepoAdder)
