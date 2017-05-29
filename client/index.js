import 'regenerator-runtime/runtime'
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import ReactDOM from "react-dom"
import React from "react"

import Home from "./scenes/Home"
import AppFrame from "./AppFrame"
require("./styles/index.styl")

import store from './store'

ReactDOM.render(
  <div className="GitSee">
      <Router history={browserHistory}>
        <Route path="/" component={AppFrame}>
          <IndexRoute component={Home}/>
        </Route>
      </Router>
  </div>,
  document.getElementById("mountPoint")
)
