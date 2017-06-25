import React, { Component } from "react"
import { Icon } from "react-fa"
import css from "./styles/RepoAdder.styl"
import { getRepo } from '@api'

// TODO: Give RepoAdder a standalone directory.
export default class RepoAdder extends Component {
  state = {
    stage: 0,
    inputValue: ''
  }

  stageUp = () => {
    this.setState(state => {
      return {
        stage: (state.stage === 4) ? 0 : state.stage + 1,
      }
    })
  }

  setInputValue = ({ target: { value }}) => {
    this.setState(state => {
      return {
        inputValue: value,
      }
    })
  }

  addRepo = async () => {
    this.setState({ stage: 2 })
    try {
      this.props.addToRepoList_Success(
        await getRepo(this.state.inputValue)
      )
    } catch (err) {
      console.warn('Error adding repo:', err)
      this.setState({ stage: 4 })
    } finally {
      this.setState({ stage: 0 })
    }
  }

  addNewRepo = () => {

  }

  render({ props, state } = this) {
    return (
      <div className={css.RepoAdder}>
        <Choose>
          <When condition={state.stage === 0}>
            <div className={css.stage0} onClick={this.stageUp}>
              <Icon name="plus-circle" className={css.plusIcon} />
              <p>Add a repo to compare.</p>
            </div>
          </When>
          <Otherwise>
            <div className={css.activeStage}>
              <div className={css.activeStageTop}>
                <input
                  onChange={this.setInputValue}
                  value={state.inputValue}
                  placeholder="owner/repo"
                  className={css.search}
                />
                <div className={css.submitButton} onClick={this.addRepo}>
                  GET STATS
                </div>
              </div>
              <div className={css.activeStageBottom}>
                <Choose>
                  <When condition={state.stage === 1}>
                    <p>
                      Type a userName/repoName above to
                      add it to the list.
                    </p>
                  </When>
                  <When condition={state.stage === 2}>
                    <p>
                      Searching for that repo...
                    </p>
                  </When>
                  <When condition={state.stage === 3}>
                    <p>
                      That search value is invalid.
                    </p>
                  </When>
                  <When condition={state.stage === 4}>
                    <p>
                      Uh oh, we're not watching that repo.
                    </p>
                    <a onClick={this.submitNewRepo}>
                      <h3>
                        Add it now?
                      </h3>
                    </a>
                  </When>
                </Choose>
              </div>
            </div>
          </Otherwise>
        </Choose>
      </div>
    )
  }
}
