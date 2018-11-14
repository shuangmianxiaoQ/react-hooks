import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>传统的有状态 class 组件</p>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState(() => ({
              count: this.state.count + 1
            }))
          }
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
