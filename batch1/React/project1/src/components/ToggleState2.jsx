import React, { Component } from "react";

class ToggleState2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Sachin",
    };
  }
  toggleName = () => {
    this.setState((prevState) => ({
      name: prevState.name === "Sachin" ? "Virat" : "Sachin",
    }));
  };
  render() {
    return (
      <div>
        <h1>Hello My name is {this.state.name}</h1>
        <button onClick={this.toggleName}>Change Name</button>
      </div>
    );
  }
}

export default ToggleState2;
