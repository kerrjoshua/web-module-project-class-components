import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
          {
            name: 'Organize Garage',
            id: 12323245345,
            completed: false
          },
          {
            name: 'Bake Cookies',
            id: 93837362546,
            completed: false
          }
      ], 

      
    }
  }
  
  handleClick = (evt) => {
    console.log(evt.target)
  }
  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          handleClick={this.handleClick}/>
        <Form />
      </div>
    )
  }
}
