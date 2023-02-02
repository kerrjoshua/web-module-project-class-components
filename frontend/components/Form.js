import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
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
