import React, { Component } from "react"
import { Icon } from "react-fa"

import CurrentStats from "./CurrentStats"
import StatRow from './StatRow'
import css from "./styles/index.styl"

// TODO: Remove Repo-- prefixes.
const Repo = (props) => {
  return (
    <div className={css.Repo}>
      <div className={css.RepoTop}>
        <h2 className={css.RepoTitle}>
          <a href={props.url}>
            <Icon name='github' className={css.RepoTitleGithubIcon}/>
          </a>
          {props.owner} / <span>{props.repoName}</span>
        </h2>
        <CurrentStats {...props.currentStats} />
      </div>
      <div className={css.RepoBottom}>
        <div className={css.RepoColumnLabels}>
          <p className={css.RepoTimeframeLabel}>timeframe</p>
          <Icon name="star" className={css.RepoRowLabel} />
          <Icon name="code-fork" className={css.RepoRowLabel} />
          <Icon name="eye" className={css.RepoRowLabel} />
        </div>
        <StatRow timeFrame="Average Day" {...props.averages} />
        <StatRow timeFrame="Yesterday" {...props.yesterday} />
        <StatRow timeFrame="Past Week" {...props.pastWeek} />
        <StatRow timeFrame="Past Month" {...props.pastMonth} />
        <div className={css.RepoViewSwapper}>
          <p>Switch to chart view</p>
        </div>
      </div>
    </div>
  )
}

export default Repo
