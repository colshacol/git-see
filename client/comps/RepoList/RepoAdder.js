import React, { Component } from "react";
import { connect } from 'react-redux';

import { Icon } from "react-fa";
import css from "./styles/RepoAdder.styl";

function RepoAdder(props) {
  console.log(props, '......')
  return (
    <div className={css.RepoAdder}>
      {!!(props.stage === 0) &&
        <div className={css.RepoAdderStage0} onClick={props.stageUp}>
          <Icon name="plus-circle" className={css.RepoAdderPlusIcon} />
          <p>Add a repo to compare.</p>
        </div>}
      {!!(props.stage === 1) &&
        <div className={css.RepoAdderStage1}>
          <div className={css.RepoAdderStage1Top}>
            <input
              value={props.inputValue}
              placeholder="owner/repo"
              className={css.RepoAdderSearch}
              onChange={props.updateInputValue}
            />
            <div className={css.RepoAdderSubmitButton} onClick={props.stageUp}>
              GET STATS
            </div>
          </div>
          <div className={css.RepoAdderStage1Bottom} />
        </div>}
    </div>
  )
}

export default class extends Component {
  state = {
    stage: 0,
    inputValue: ""
  };

  setStage = x => this.setState(({ stage }) => ({ stage: x }));
  setInputValue = v => this.setState({ inputValue: v });

  updateInputValue = ({ target: { value } }) => {
    this.setInputValue(value);
  };

  addRepo = async ({ owner, repo }) => {
    this.setStage(0);
    this.setInputValue("");
    fetch(`http://localhost:3987/api/v1/repo/${this.state.inputValue}`)
      .then(res => res.json())
      .then(data => {
        return this.props.addRepo(data);
      }).catch(console.error);
  };

  stageUp = () => {
    if (this.state.stage === 0) {
      this.setStage(1);
    } else if (this.state.stage === 1) {
      this.addRepo({ owner: "a", repo: "b" });
    }
  };

  render({ props, state } = this) {
    console.log({ props, state });
    const { stageUp, updateInputValue } = this;
    return RepoAdder({ ...props, ...state, stageUp, updateInputValue })
  }
}

// export default connect()
