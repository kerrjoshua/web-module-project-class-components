import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className="todo" id={this.props.item.id}
      onClick={this.props.handleClick}>
        {this.props.item.name}
        {this.props.item.completed && <span>   {String.fromCharCode(10004)}</span>}
      </div>
    )
  }
}
