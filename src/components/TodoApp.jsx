import React, {Component} from 'react';
import TodoList from './TodoList';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: '',
    };
  }

  handleSubmit = e => {
    // console.log(this.state);
    if (this.state.text === '') {
      return;
    }
    const newItem = {
      id: Date.now(),
      text: this.state.text,
    };
    this.setState({
      items: this.state.items.concat(newItem),
      text: '',
    });

    e.preventDefault();
  };

  handleChange = e => {
    // console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Pending works</h2>
        <TodoList items={this.state.items} />
        <br />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='todo'>What do you need todo?</label>
          <br />
          <input
            type='text'
            id='todo'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}
