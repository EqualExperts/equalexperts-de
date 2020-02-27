import React from "react"
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
      {
        "navItemText": "Datenschutz",
        "navItemUrl": "/datenschutz/"
      },
      {
        "navItemText": "Impressum",
        "navItemUrl": "/impressum"
      },
      {
        "navItemText": "Modern Slavery Policy",
        "navItemUrl": "/modernSlaveryPolicy"
      }
    ];

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
      }
    ];

    return (
      <div className={`main-container`}>
        <FooterLayout
          navLinks={navLinks}
          legalLinks={legalLinks}
          switcherLinks={langsMenu}
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