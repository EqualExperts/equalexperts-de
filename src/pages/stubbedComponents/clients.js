import React from "react"
import {Link} from "gatsby"
import HeaderLayout from "../../components/header_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {

    const langsMenu = [
      {
        langKey: "de",
        selected: true,
        link: "/de/"
      },
      {
        langKey: "en-US",
        selected: false,
        link: "/en-US/"
      },
    ];
   
    const navLinks = [
      <Link to="/kunde/" key={'blogNavItem1'} className={`header__navigation-link`}>Kunde</Link>,
      <Link to="/karrier/" key={'blogNavItem2'} className={`header__navigation-link`}>Karrier</Link>,
      <Link to="/womanInTech/" key={'blogNavItem6'} className={`header__navigation-link`}>Women in Tech</Link>,
      <Link to="/blogs-list/" key={'blogNavItem3'} className={`header__navigation-link`}>Blog</Link>,
      <Link to="/contact/" key={'blogNavItem4'} className={`header__navigation-link`}>Kontact</Link>
    ];

    return (
      <div className={`main-container`}>
        <HeaderLayout
          navLinks={navLinks}
          switcherLinks={langsMenu}
        />
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
