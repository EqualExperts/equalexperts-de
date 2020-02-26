import React from "react"
import {Link} from "gatsby"
import FooterLayout from "../../components/footer_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {
   
    const navLinks = [
      <Link to="/kunde/" key={'blogNavItem1'} className={`header__navigation-link`}>Kunde</Link>,
      <Link to="/karrier/" key={'blogNavItem2'} className={`header__navigation-link`}>Karrier</Link>,
      <Link to="/womanInTech/" key={'blogNavItem6'} className={`header__navigation-link`}>Women in Tech</Link>,
      <Link to="/blogs-list/" key={'blogNavItem3'} className={`header__navigation-link`}>Blog</Link>,
      <Link to="/contact/" key={'blogNavItem4'} className={`header__navigation-link`}>Kontact</Link>
    ];

    const legalLinks = [
      <li className="legal-navigation__item" key={'legalNavItem1'}><a href="/privacy-notice">Privacy notice</a></li>,
      <li className="legal-navigation__item" key={'legalNavItem2'}><a href="/modern-slavery-policy">Modern Slavery policy</a></li>,
      <li className="legal-navigation__item" key={'legalNavItem3'}><a href="/brand">Brand resources</a></li>,
    ];

    return (
      <div className={`main-container`}>
        <FooterLayout
          navLinks={navLinks}
          legalLinks={legalLinks}
        >
        </FooterLayout>
      </div>
    )
  }
  componentDidMount() {
    window.requestAnimationFrame(function() {
      console.log("componentLoaded");
    });
  }
}

export default IndexPage