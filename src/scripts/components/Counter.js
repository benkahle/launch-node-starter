import React, { Component } from 'react'
require("../../styles/counter.scss");

export default class Counter extends Component {
  constructor(props) {
    super(props)
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.setValue(this.props.counterValue + 1)
  }

  decrement() {
    this.props.setValue(this.props.counterValue - 1)
  }

  render() {
    return (
      <div className="counter">
        <h2>Counter:</h2>
        <textarea value={this.props.counterValue} disabled></textarea>
        <div className="controls">
          <button className="decrement" onClick={(ev) => {this.decrement()}}>-1</button>
          <button className="increment" onClick={(ev) => {this.increment()}}>+1</button>
        </div>
      </div>
    )
  }
}
