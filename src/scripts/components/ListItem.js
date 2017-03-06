import React, { Component } from 'react'
require("../../styles/list-item.scss");

export default class ListItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = this.props.name
    let highlight = this.props.highlight || ""
    let nameElement = <p>{name}</p>
    let highlightIndex = name.indexOf(highlight)
    if (highlightIndex >= 0) {
      let pre = name.slice(0, highlightIndex)
      let mid = name.slice(highlightIndex, highlightIndex+highlight.length)
      let post = name.slice(highlightIndex+highlight.length)
      nameElement = (<p>{pre}<span className="highlight">{mid}</span>{post}</p>)
    }
    return (
      <li className="list-item">
        {nameElement}
      </li>
    )
  }
}
