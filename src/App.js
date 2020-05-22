import React, { Component } from 'react'
import { Route } from "react-router";
import Homepage from './components/Homepage';
import Locations from './components/Locations';
import LocationDetails from './components/LocationDetails'
import PostDetails from './components/PostDetails'
import About from './components/About'
import Toolbar from './components/toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import LogInSignUp from './components/LogInSignUp'

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <Route path='/' exact component={About} />
          <Route path='/locations' component={Locations} />
          <Route path='/locationPosts/:id' component={LocationDetails} />
          <Route path='/posts/:id' component={PostDetails} />
          <Route path='/home' component={Homepage} />
          <Route path='/login' component={LogInSignUp} />
        </main>
      </div>
    )
  }
}

export default App
