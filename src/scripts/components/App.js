import React, { Component } from 'react'
import { Link } from 'react-router'
require("../../styles/app.scss");

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>React Redux Starter Kit</h1>
        <ul role="nav" className="nav">
          <li><Link to="/" activeClassName="active-link" onlyActiveOnIndex={true}>Home</Link></li>
          <li><Link to="/counter" activeClassName="active-link">Counter</Link></li>
        </ul>

        {this.props.children}

      </div>
    )
  }
}

export default App
