import React, { Component } from "react";
import { Icon } from "react-fa";
import CurrentStats from "./CurrentStats";
import "./styles/index.css";

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
    const { currentStats } = props;
    const { yesterday } = props;
    const { pastWeek } = props;
    const { pastMonth } = props;
    const { averages } = props;
    return (
      <div className="Repo">
        <div className="RepoTop">
          <h2 className="RepoTitle">
            <Icon name='github' className='RepoTitleGithubIcon'/>
            {props.owner} / <span>{props.reponame}</span>
          </h2>
          <CurrentStats {...currentStats} />
        </div>
        <div className="RepoBottom">
          <div className="RepoColumnLabels">
            <p className="RepoTimeframeLabel">timeframe</p>
            <Icon name="star" className="RepoRowLabel" />
            <Icon name="code-fork" className="RepoRowLabel" />
            <Icon name="eye" className="RepoRowLabel" />
          </div>
          <RepoStatRow timeFrame="Average Day" {...averages} />
          <RepoStatRow timeFrame="Yesterday" {...yesterday} />
          <RepoStatRow timeFrame="Past Week" {...pastWeek} />
          <RepoStatRow timeFrame="Past Month" {...pastMonth} />
          <div className="RepoViewSwapper">
            <p>Switch to chart view</p>
          </div>
        </div>
      </div>
    );
  }
}

function RepoStatRow(props) {
  return (
    <div className="RepoStatRow">
      <p className="RepoRowTimeframe">{props.timeFrame}</p>
      <p className="RepoRowStat">{props.stars}</p>
      <p className="RepoRowStat">{props.forks}</p>
      <p className="RepoRowStat">{props.watchers}</p>
    </div>
  );
}
