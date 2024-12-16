import React, { Component } from "react";

class ClassComp extends Component {
  constructor() {
    // a constructor is a function in classes which will initialise an object
    super(); //invoke th super class constructor
    this.state = {
      // state is only present in class component
      name: "Sachin",
      age: 50,
      country: "India",
    };
  }
  render() {
    return (
      <div>
        <h1>I am a class component</h1>
        <h4>
          Hi my name is {this.state.name} and I am {this.state.age} years of age
          and I come from {this.state.country}
        </h4>
      </div>
    );
  }
}

export default ClassComp;
