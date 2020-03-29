import React, { Component } from 'react'
import { Route } from "react-router";
import './App.css';
import Homepage from './components/Homepage';
import Locations from './components/Locations';
import LocationDetails from './components/LocationDetails'

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' exact component={Homepage} />
        <Route path='/locations' component={Locations} />
        <Route path='/locations/:id' component={LocationDetails} />
      </div>
    )
  }
}

export default App
