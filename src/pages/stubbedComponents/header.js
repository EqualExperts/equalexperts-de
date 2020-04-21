import React from "react"
import HeaderLayout from "../../components/header_layout"
import "../../styles/index.scss"

class IndexPage extends React.Component {
  render() {
    const langsMenu = ["de", "en-US"]

    const navLinks = [
      {
        navItemText: "Kunden",
        navItemUrl: "#Kunden",
      },
      {
        navItemText: "Karriere",
        navItemUrl: "#Karriere",
      },
      {
        navItemText: "Empowerment and Tech",
        navItemUrl: "something",
      },
      {
        navItemText: "Blog",
        navItemUrl: "blog/",
      },
      {
        navItemText: "Kontakt",
        navItemUrl: "#Kontakt",
      },
    ]

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
      console.log("componentLoaded")
    })
  }
}

export default IndexPage
