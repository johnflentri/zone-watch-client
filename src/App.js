import React, { Component } from 'react'
import { Route } from "react-router";
import './index.css';
import Homepage from './components/Homepage';
import Locations from './components/Locations';
import LocationDetails from './components/LocationDetails'
import PostDetails from './components/PostDetails'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from './components/toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

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
          <Route path='/' exact component={Homepage} />
          <Route path='/locations' component={Locations} />
          <Route path='/locationPosts/:id' component={LocationDetails} />
          <Route path='/posts/:id' component={PostDetails} />
        </main>
      </div>
    )
  }
}

export default App
