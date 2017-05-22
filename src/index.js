import registerServiceWorker from "./utils/rsw";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./scenes/Home";
import AppFrame from "./AppFrame";
require("./styles/index.css");

ReactDOM.render(
  <div className="GitSee">
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
