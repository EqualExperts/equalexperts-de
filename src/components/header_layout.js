import { Link } from "gatsby"
import React from "react"
import image from "../images/logo.svg"

class HeaderLayout extends React.Component {

  state = {
    isClient: false,
  }

  componentDidMount() {
    this.setState({
      isClient: true,
    });
  }

  render() {
    let props = this.props;
    return (
      <header className={`header`}>
        <div className={`header__content-wrapper`}>
          <div className={`header__logoWrapper`}>
            <Link to={props.homeLink}>
              <img
                className={`header__logo`}
                src={image}
                alt={`Equal Experts logo`}
              />
            </Link>
          </div>
          <nav className={`header__navigation`}>
            {props.navLinks.map(item => {
              if (item.navItemUrl.indexOf("#") !== -1 && this.state.isClient) {
                
                let uniqueLink = props.homeLink + item.navItemUrl;
                
                return (
                  <a
                    href={uniqueLink}
                    key={`navItem_${uniqueLink}`}
                    className={`header__navigation-link`}
                  >
                    {item.navItemText}
                  </a>
                )
              } else {
                return (
                  <Link
                    to={props.homeLink + item.navItemUrl}
                    key={`navItem_${item.navItemUrl}`}
                    className={`header__navigation-link`}
                  >
                    {item.navItemText}
                  </Link>
                )
              }
            })}
            <div className={`header__lang-switcher`}>
              <ul>
                {props.switcherLinks.map((lang, i) => {
                  let link = `/${lang}/`
                  if (lang === "de") {
                    link = link.replace(/\/de/g, "")
                  }
                  let separatorClass =
                    i < props.switcherLinks.length - 1
                      ? "header__lang-switcher__separator"
                      : null
                  return (
                    <li className={separatorClass} key={`langSelector_${i}`}>
                      <Link to={link}>
                        <span>{lang === "de" ? "DE" : "EN"}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default HeaderLayout
