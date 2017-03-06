import React, { Component } from 'react'
import ListItem from './ListItem'
require("../../styles/filtered-list.scss");

export default class FilteredList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: ""
    }
  }

  render() {
    let childComponents;
    if (this.props.listData.length) {
      childComponents = this.props.listData.filter(itemName => {
        return itemName.toLowerCase().includes(this.state.search)
      })
      .sort()
      .map((c, i) => <ListItem key={i} name={c} highlight={this.state.search}/>)
    }

    return (
      <div className="filtered-list">
        <div className="list-wrapper">
          <h2>Filterable List:</h2>
          <div className="search">
            <label htmlFor="list-search">Filter results: </label>
            <input id="list-search" value={this.state.search} onChange={(ev) => {this.setState({search: ev.target.value.toLowerCase()})}}/>
          </div>
          <ul>
            {childComponents}
          </ul>
        </div>
      </div>
    )
  }
}
