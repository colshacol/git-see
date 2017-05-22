import registerServiceWorker from "./utils/rsw";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./scenes/Home";
import AppFrame from "./AppFrame";
import "./styles/index.styl";

ReactDOM.render(
  <div className="GitSee">
    {/*<Navbar/>*/}
    <Router history={browserHistory}>
      <Route path="/" component={AppFrame}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
