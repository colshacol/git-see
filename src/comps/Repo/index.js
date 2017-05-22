import React, { Component } from "react";
import "./styles.css";

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
    return (
      <div className="Repo">
        <div className="RepoTop">
          <h2 className="RepoTitle">vuejs / <span>vue</span></h2>
          <div className='RepoCurrentStats'>
            <div className='RepoCurrentStat'>
              s 57,983
            </div>
            <div className='RepoCurrentStat'>
              f 7,213
            </div>
            <div className='RepoCurrentStat'>
              w 9,418
            </div>
          </div>
        </div>
        <div className="RepoBottom">
          <div className="RepoColumnLabels">
            <p className='RepoTimeframeLabel'>timeframe</p>
            <p className='RepoRowLabel'>s</p>
            <p className='RepoRowLabel'>f</p>
            <p className='RepoRowLabel'>w</p>
          </div>
          <RepoStatRow
            timeFrame='Yesterday'
            stars={'99'}
            forks={'22'}
            watchers={'19'}
          />
          <RepoStatRow
            timeFrame='Past Week'
            stars={'879'}
            forks={'155'}
            watchers={'124'}
          />
          <RepoStatRow
            timeFrame='Past Month'
            stars={'11,980'}
            forks={'1,098'}
            watchers={'963'}
          />
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
    <div className='RepoStatRow'>
      <p className='RepoRowTimeframe'>{props.timeFrame}</p>
      <p className='RepoRowStat'>{props.stars}</p>
      <p className='RepoRowStat'>{props.forks}</p>
      <p className='RepoRowStat'>{props.watchers}</p>
    </div>
  )
}
