import React from "react"
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
      }
    ];
   
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
