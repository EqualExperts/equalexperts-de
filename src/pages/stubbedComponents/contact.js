import React from "react"
import ContactsLayout from "../../components/contacts_layout"
import "../../styles/index.scss"

class IndexPage extends React.Component {
  render() {
    const contactCopy = {
      contactIntroductionTitle: "Hier, um zu bleiben",
      contactIntroduction: {
        json: {
          content: [
            {
              content: [
                {
                  data: {},
                  marks: [],
                  value:
                    "Equal Experts wurde 2005 in London gegründet und ist seit 2015 als Geschäftseinheit in Deutschland aktiv.",
                  nodeType: "text",
                },
              ],
            },
            {
              content: [
                {
                  value:
                    "\nUm unsere global operierenden Kunden lokal unterstützen sowie das Netzwerk von internationalen Partnern auszubauen zu können betreiben wir seit 2018 unseren EU-Hauptsitz in Berlin.",
                  nodeType: "text",
                },
              ],
            },
          ],
        },
      },
      contactSectionHeading: "Kontakt",
      contactBackgroundImage: {
        file: {
          url:
            "http://images.ctfassets.net/2mx9j3gfirje/7GnlugQa38iGQ4WtMGsBIr/f69241f8894dbd782b5e49f4da49e913/EE_Germany.jpg",
        },
      },
    }

    const officeLocations = [
      {
        node: {
          region: "HQ",
          city: "Berlin",
          tel: "004915120073771",
          email: "helloBER@equalexperts.com",
          linkText: "Karte und mehr info",
          link: "/contact-us",
        },
      },
      {
        node: {
          region: "Süd",
          city: "München",
          tel: "004915120073771",
          email: "helloMUC@equalexperts.com",
          linkText: "Karte und mehr info",
          link: "/contact-us",
        },
      },
      {
        node: {
          region: "West",
          city: "Köln",
          tel: "004915120073771",
          email: "helloCGN@equalexperts.com",
          linkText: "Karte und mehr info",
          link: "/contact-us",
        },
      },
    ]

    return (
      <div className={`main-container`}>
        <ContactsLayout
          contactCopy={contactCopy}
          officeLocations={officeLocations}
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
