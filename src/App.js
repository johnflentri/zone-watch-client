import React, { Component } from 'react'
import { Route } from "react-router";
import './App.css';
import Homepage from './components/Homepage';
import Locations from './components/Locations';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Homepage} />
        <Route path='/locations' component={Locations} />
      </div>
    )
  }
}

export default App
