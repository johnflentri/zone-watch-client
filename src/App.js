import React, { Component } from 'react'
import store from './store'
import './App.css';
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>Hello world!</div>
      </Provider>
    );
  }
}

export default App
