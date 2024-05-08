import React from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../assets/LOGO-FOOTER.png'

const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <img src={logoFooter} alt="logo Kasa Footer" />
      </Link>
      <p> &copy; 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
