import registerServiceWorker from "./utils/rsw";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import React from "react";

import Home from "./scenes/Home";
import AppFrame from "./AppFrame";
require("./styles/index.css");

ReactDOM.render(
  <div className="GitSee">
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={AppFrame}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
    </Provider>
  </div>,
  document.getElementById("root")
);

registerServiceWorker();
