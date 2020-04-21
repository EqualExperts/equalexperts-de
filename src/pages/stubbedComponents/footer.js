import React from "react"
import FooterLayout from "../../components/footer_layout"
import "../../styles/index.scss"

class IndexPage extends React.Component {
  render() {
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

    const legalLinks = [
      {
        navItemText: "Datenschutz",
        navItemUrl: "datenschutz/",
      },
      {
        navItemText: "Impressum",
        navItemUrl: "impressum",
      },
      {
        navItemText: "Modern Slavery Policy",
        navItemUrl: "modernSlaveryPolicy",
      },
    ]

    const langsMenu = ["de", "en-US"]

    return (
      <div className={`main-container`}>
        <FooterLayout
          homeLink={"/"}
          navLinks={navLinks}
          legalLinks={legalLinks}
          switcherLinks={langsMenu}
        ></FooterLayout>
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
