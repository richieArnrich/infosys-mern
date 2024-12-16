import React, { Component } from "react";

class ToggleState extends Component {
  constructor() {
    super();
    this.state = {
      name1: "Sachin",
      name2: "Virat",
      toggle: true,
    };
  }
  toggleState = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    if (this.state.toggle) {
      return (
        <div>
          <h1>Hello my name is {this.state.name1}</h1>
          <button onClick={this.toggleState}>Change Name</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Hello my name is {this.state.name2}</h1>
          <button onClick={this.toggleState}>Change Name</button>
        </div>
      );
    }
  }
}

export default ToggleState;
