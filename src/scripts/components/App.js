import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props);
    this.requireAuth = this.requireAuth.bind(this);

    this.router = (
      <Router history={this.props.history}>
        <Route path="/" component={}>
          <IndexRoute component={} onEnter={this.requireAuth}/>
        </Route>
      </Router>
    );
  }

  requireAuth(nextState, replace) {
    if (!this.props.user.id) {
      replace({
        pathname: '/login',
      });
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        {this.router}
      </MuiThemeProvider>
    )
  }
}

export default App;
