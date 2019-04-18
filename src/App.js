import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';

const store = createStore();

class App extends Component {
 // The state object has been removed
  render() {
    return <HelloWorld tech={this.state.tech} />;
  }
}

export default App;
