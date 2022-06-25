import React from 'react'
import '../../styles/Nav.css'

import { NavLink } from 'react-router-dom'
import LogoDesktop from '../../assets/logo/logo-desktop.png'

const Nav = (props) => {
  return (
    <nav className="nav-bar">
      <NavLink id="logo" to='/posts'><img src={LogoDesktop} alt="disco-ball" /></NavLink>
      {props.user
        ? <>
          <NavLink to="/" onClick={props.handleLogout}>Logout</NavLink>
        </>
        : <>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/signin'>Sign In</NavLink>
        </>
      }
    </nav>
  )
}

export default Nav