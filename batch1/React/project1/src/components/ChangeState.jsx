import React, { Component } from "react";

class ChangeState extends Component {
  constructor() {
    super();
    this.state = {
      name: "John",
    };
    // bind handleClick : binding the handleClick function to the current class object
    this.handleClick = this.handleClick.bind(this);
    console.log(this);
  }
  handleClick() {
    this.setState({
      name: "Jane",
    });
  }
  //   the event handling function must be binded with the state
  render() {
    return (
      <div>
        <h1>My name is {this.state.name}</h1>
        <button onClick={this.handleClick}>Change Name</button>
      </div>
    );
  }
}

export default ChangeState;
