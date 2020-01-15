import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/_header.scss'
import image from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header className={`header`}>
    <img className={`header__logo`} src={image}/>
    <div>
      <nav className={`header__navigation`}>
          <ul>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
