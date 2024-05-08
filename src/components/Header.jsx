import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navigation">
      <ul className="navigation-container">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to={'/About'}
          className={({ isActive }) =>
            isActive ? 'nav-link nav-link-active' : 'nav-link'
          }
        >
          A propos
        </NavLink>
      </ul>
    </div>
  )
}

export default Header
