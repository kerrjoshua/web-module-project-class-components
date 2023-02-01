import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
        <h2>Todo List</h2>
        {this.props.todos.map(todo => 
          <Todo  
            key={todo.id} 
            item={todo}
            handleClick={this.props.handleClick}
          />)}
      </div>
    )
  }
}
