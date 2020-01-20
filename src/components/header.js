import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import image from '../images/logo.svg'

const Header = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: 'white'
    }}>
      <li selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <header className={`header`}>
      <div className={`header__content-wrapper`}>
        <img className={`header__logo`} src={image} alt={`Equal Experts logo`} />
        <nav className={`header__navigation`}>
          <Link to="/blog/" className={`header__navigation-link`}>Blog</Link>
          <Link to="/Contact/" className={`header__navigation-link`}>Contact</Link>
        </nav>
        <div className={`header__lang-switcher`}>
          <ul>
            {links}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header
