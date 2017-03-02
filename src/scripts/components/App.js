import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import CounterContainer from '../containers/CounterContainer'
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props);

    this.router = (
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          {/* <Route component={CounterContainer}/> */}
        </Route>
      </Router>
    );
  }
  render() {
    return this.router
  }
}

export default App;
