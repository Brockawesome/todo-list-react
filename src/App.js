import React, { Component } from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Footer from './Footer';
import Clock from './Clock';
import Market from './Market';

class App extends Component {
  state = { todos: [], filter: 'All', showClock: false, showMarket: false }

  toggleShowMarket = () => {
    this.setState( state => {
      return { showMarket: !state.showMarket}
    })
  }

  toggleShowClock = () => {
    this.setState( state =>{
      return { showClock: !state.showClock }
    })
  }

  setFilter = (filter) => {
    this.setState({filter})
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }

  addItem = (name) => {
    const { todos } = this.state
    const todo = { name, id: this.getUniqId(), complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  handleClick = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
        return todo
      })
    })
  }

  visibleItems = () => {
    const { todos, filter} = this.state
    switch(filter) {
      case 'Active':
      return todos.filter( t => !t.complete)
      case 'Complete':
      return todos.filter( t => t.complete)
      default:
      return todos;
    }
  }

  render() {
    const { todos, filter, showClock, showMarket } = this.state;

    return (
      <div class='container'>
                <span><button onClick={this.toggleShowClock}>Clock</button>{ showClock && <Clock /> }</span>
      <div>


        <List name="Todo List" items={this.visibleItems()} todoClick={this.handleClick} />
        <TodoForm addItem={this.addItem} />
        <Footer filter={filter} setFilter={this.setFilter} />
          <div class='features'>

          { showMarket && <Market /> }
          <button onClick={this.toggleShowMarket}>Market</button>
          </div>
      </div>

      </div>
    );
  }
}

export default App;
