import React, { Component } from "react";
import { Icon } from "react-fa";
import "./styles/RepoAdder.css";

export default class RepoAdder extends Component {
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
    return (
      <div className="RepoAdder">
        {!!(state.stage === 0) &&
          <div className="RepoAdderStage0" onClick={this.stageUp}>
            <Icon name="plus-circle" className="RepoAdderPlusIcon" />
            <p>Add a repo to compare.</p>
          </div>}
        {!!(state.stage === 1) &&
          <div className="RepoAdderStage1">
            <div className="RepoAdderStage1Top">
              <input
                value={state.inputValue}
                placeholder="owner/repo"
                className="RepoAdderSearch"
                onChange={this.updateInputValue}
              />
              <div className="RepoAdderSubmitButton" onClick={this.stageUp}>
                GET STATS
              </div>
            </div>
            <div className="RepoAdderStage1Bottom" />
          </div>}
      </div>
    );
  }
}
