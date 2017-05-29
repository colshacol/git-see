import React, { Component } from "react";

import RepoList from '../../comps/RepoList'
import css from "./styles.styl";

export default class Home extends Component {
  render() {
    return (
      <div className={css.Home}>
        <RepoList/>
      </div>
    );
  }
}
