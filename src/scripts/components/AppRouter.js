import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Home from './Home'
import CounterContainer from '../containers/CounterContainer'

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.router = (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="counter" component={CounterContainer}/>
        </Route>
      </Router>
    )
  }
  render() {
    return this.router
  }
}

export default AppRouter;
