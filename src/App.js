import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';
import reducer from './reducers';

const initialState = { tech: 'React '};

const store = createStore(reducer, initialState);

class App extends Component {
 // The state object has been removed
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
