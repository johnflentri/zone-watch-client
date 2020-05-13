import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">first</a></li>
          <li><a href="/">second</a></li>
          <li><a href="/">third</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar