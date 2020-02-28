import React from "react"
import HeaderLayout from "../../components/header_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {

    const langsMenu = ["de", "en-US"];
   
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
        "navItemUrl": "something"
      },
      {
        "navItemText": "blog",
        "navItemUrl": "blog/"
      },
      {
        "navItemText": "kontact",
        "navItemUrl": "#kontact"
      }
    ];

    return (
      <div className={`main-container`}>
        <HeaderLayout
          homeLink={"/"}
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
