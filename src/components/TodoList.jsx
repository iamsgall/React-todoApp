import React, {Component} from 'react';

export default class TodoList extends Component {
  render() {
    const {items} = this.props;
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
