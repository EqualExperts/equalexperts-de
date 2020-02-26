import React from "react"
import {Link} from "gatsby"
import FooterLayout from "../../components/footer_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {
   
    const navLinks = [
      {
        "navItemText": "Kunde",
        "navItemUrl": "#Kunde"
      },
      {
        "navItemText": "Karriere",
        "navItemUrl": "#Karriere"
      },
      {
        "navItemText": "Empowerment and Tech",
        "navItemUrl": "/"
      },
      {
        "navItemText": "blog",
        "navItemUrl": "/blog/"
      },
      {
        "navItemText": "kontact",
        "navItemUrl": "#kontact"
      }
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