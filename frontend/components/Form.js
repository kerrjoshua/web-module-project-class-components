import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <input 
          placeholder='New item...'
          name='newItem'
          />
        <button>Add Item</button>
      </form>
    )
  }
}
