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
                    {props.navLinks.map(item => {
                      return (<Link to={item.navItemUrl} key={`navItem_${item.navItemUrl}`} className={`header__navigation-link`}>{item.navItemText}</Link>)
                    })}
                    <div className={`header__lang-switcher`}>
                      <ul>
                      {props.switcherLinks.map((lang, i) => {
                        let link = lang.link;
                        if(lang.langKey === "de") {
                          link = "/";
                        }
                        let separatorClass = i < props.switcherLinks.length-1 ? "header__lang-switcher__separator" : null;
                        return (
                          <li className={separatorClass} key={`langSelector_${i}`}>
                              <Link to={link}>
                                <span selected={lang.selected}>
                                    {lang.langKey === 'de'?'DE':'EN'}
                                </span>
                              </Link>
                          </li>
                          );
                        }
                      )}
                      </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default HeaderLayout
