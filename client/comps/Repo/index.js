import React, { Component } from "react";
import { Icon } from "react-fa";
import CurrentStats from "./CurrentStats";
import css from "./styles/index.styl";

export default class Repo extends Component {
  state = {
    view: ""
  };

  swapViews = () => {
    this.setState(({ view }) => ({
      view: view > 0 ? 0 : 1
    }));
  };

  render({ props, state } = this) {
    console.log('repo props: ', Object.keys(props));
    const { currentStats,
      yesterday,
      pastWeek,
      pastMonth,
      averages
    } = props;
    return (
      <div className={css.Repo}>
        <div className={css.RepoTop}>
          <h2 className={css.RepoTitle}>
            <Icon name='github' className='RepoTitleGithubIcon'/>
            {props.owner} / <span>{props.reponame}</span>
          </h2>
          <CurrentStats {...currentStats} />
        </div>
        <div className={css.RepoBottom}>
          <div className={css.RepoColumnLabels}>
            <p className={css.RepoTimeframeLabel}>timeframe</p>
            <Icon name="star" className={css.RepoRowLabel} />
            <Icon name="code-fork" className={css.RepoRowLabel} />
            <Icon name="eye" className={css.RepoRowLabel} />
          </div>
          <RepoStatRow timeFrame="Average Day" {...averages} />
          <RepoStatRow timeFrame="Yesterday" {...yesterday} />
          <RepoStatRow timeFrame="Past Week" {...pastWeek} />
          <RepoStatRow timeFrame="Past Month" {...pastMonth} />
          <div className={css.RepoViewSwapper}>
            <p>Switch to chart view</p>
          </div>
        </div>
      </div>
    );
  }
}

function RepoStatRow(props) {
  return (
    <div className={css.RepoStatRow}>
      <p className={css.RepoRowTimeframe}>{props.timeFrame}</p>
      <p className={css.RepoRowStat}>{props.stars}</p>
      <p className={css.RepoRowStat}>{props.forks}</p>
      <p className={css.RepoRowStat}>{props.watchers}</p>
    </div>
  );
}
