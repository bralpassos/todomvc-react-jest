import React from 'react';

export default class TodoItem extends React.Component {

  renderItems = () => this.props.items.map((item, index) => (
      <li key={index}>
          <div className="view">
              <label>{item}</label>
          </div>
      </li>
    ));

    render() {
        return (
            <section className="main">
            <ul className="todo-list">
              {this.props.items.length === 0 ? '' : this.renderItems()}
            </ul>
          </section>
        );
    }
}