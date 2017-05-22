import React, { Component } from "react";

import Repo from '../../comps/Repo';
import "./styles.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        HOMEY
        <hr/>
        <Repo/>
        <Repo/>
        <Repo/>
        <Repo/>
      </div>
    );
  }
}
