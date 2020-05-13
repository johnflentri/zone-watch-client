import React from 'react'

import { Link } from "react-router-dom";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><Link to={`/`}>ZoneWatch Logo</Link></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><Link to={`/`}>My Newsfeed</Link></li>
          <li><Link to={`/Locations`}>Zone Channels</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar