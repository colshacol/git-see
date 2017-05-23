import React, { Component } from "react";

import RepoList from '../../comps/RepoList'
import "./styles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <RepoList/>
      </div>
    );
  }
}
