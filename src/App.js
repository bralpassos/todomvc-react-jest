import React from 'react';
import TodoItem from './TodoItem.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: '',
      items : []
    }
  }

  handleChange = (e) => {
    this.setState({ currentItem: e.target.value });
  }

  addNewItem = (e) => {
    const tempItem = this.state.items;
    const newItem = this.state.currentItem;
    const hasItem = tempItem.indexOf(newItem) >= 0;

    console.log(hasItem);

    if (e.key === 'Enter' && !hasItem) {
      tempItem.push(newItem);
      this.setState({ 
        items: tempItem,
        currentItem: ''
      });
    }
  } 

  render () {
    return (
      <div className="App">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={this.state.currentItem}
            onChange={this.handleChange}
            onKeyPress={this.addNewItem}
          />
        </header>
        <TodoItem items={this.state.items} />
      </div>
    );
  }
}

export default App;