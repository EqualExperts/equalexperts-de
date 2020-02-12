import {Link} from "gatsby"
import React from "react"
import image from '../images/logo.svg'

const HeaderLayout = (props) => {
    return (
        <header className={`header`}>
            <div className={`header__content-wrapper`}>
                <div className={`header__logoWrapper`}>
                  <Link to={'/'}>
                      <img className={`header__logo`} src={image} alt={`Equal Experts logo`} />
                  </Link>
                </div>
                <nav className={`header__navigation`}>
                    {props.navLinks}
                    <div className={`header__lang-switcher`}>
                      <ul>
                          {props.switcherLinks}
                      </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderLayout
