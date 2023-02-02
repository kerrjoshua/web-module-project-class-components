import React from 'react'

export default class Form extends React.Component {

  handleSubmit = (evt => {
    evt.preventDefault();
    this.props.addItem(evt)
  })
  render() {
    return (
      <form onSubmit={evt => this.handleSubmit(evt)}>
        <input 
          placeholder='New item...'
          name='newItem'
          onChange={this.props.handleChange}
          value={this.props.inputVal}
          />
        <button>Add Item</button>
      </form>
    )
  }
}
