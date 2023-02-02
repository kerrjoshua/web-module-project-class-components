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
      newItem: ''

      
    }
  }
  
handleChange = (evt => {
  const { name, value} = evt.target;
  this.setState({[name]: value})
})

  handleClick = (evt) => {
    const newTodos = [...this.state.todos];
    const item = newTodos.find(item => item.id === parseInt(evt.target.id));
    item.completed = !item.completed;
    this.setState({todos: newTodos});
  }
  render() {
    return (
      <div>
        <TodoList 
          todos={this.state.todos} 
          handleClick={this.handleClick}
        />
        <Form
          handleChange={this.handleChange}
          inputVal={this.state.newItem}
        />
      </div>
    )
  }
}
