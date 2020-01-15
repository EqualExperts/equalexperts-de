import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/_header.scss'
import image from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <header className={`header`}>
      <div className={`header__content-wrapper`}>
        <img className={`header__logo`} src={image} alt={`Equal Experts logo`}/>
          <nav className={`header__navigation`}>
              <Link to="/blog/" className={`header__navigation-link`}>Blog</Link>
              <Link to="/Contact/" className={`header__navigation-link`}>Contact</Link>
          </nav>
          <div className={`header__lang-switcher`}>
              <button>De</button> / <button>En</button>
          </div>
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
