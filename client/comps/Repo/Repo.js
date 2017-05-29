import React, { Component } from "react"
import { Icon } from "react-fa"

import withStore from '@utils/withStore'
import { RepoStore } from './stores'
import CurrentStats from "./CurrentStats"
import StatRow from './StatRow'
import css from "./styles/index.styl"

// TODO: Remove Repo-- prefixes.
const Repo = ({ props, store }) => {
  return (
    <div className={css.Repo}>
      <div className={css.RepoTop}>
        <h2 className={css.RepoTitle}>
          <a href={store.url}>
            <Icon name='github' className={css.RepoTitleGithubIcon}/>
          </a>
          {store.owner} / <span>{store.repoName}</span>
        </h2>
        <CurrentStats {...store.currentStats} />
      </div>
      <div className={css.RepoBottom}>
        <div className={css.RepoColumnLabels}>
          <p className={css.RepoTimeframeLabel}>timeframe</p>
          <Icon name="star" className={css.RepoRowLabel} />
          <Icon name="code-fork" className={css.RepoRowLabel} />
          <Icon name="eye" className={css.RepoRowLabel} />
        </div>
        <StatRow timeFrame="Average Day" {...store.averages} />
        <StatRow timeFrame="Yesterday" {...store.yesterday} />
        <StatRow timeFrame="Past Week" {...store.pastWeek} />
        <StatRow timeFrame="Past Month" {...store.pastMonth} />
        <div className={css.RepoViewSwapper}>
          <p>Switch to chart view</p>
        </div>
      </div>
    </div>
  )
}

export default withStore(RepoStore)(Repo)
