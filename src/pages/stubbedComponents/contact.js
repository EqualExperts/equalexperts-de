import React from "react"
import ContactsLayout from "../../components/contacts_layout";
import "../../styles/index.scss"


class IndexPage extends React.Component {
  render() {

    const contactCopy = {
      "contactIntroductionTitle": "Hier zu bleiben",
      "contactIntroduction": {
        "json": {
          "content": [
            {
              "content": [
                {
                  "data": {},
                  "marks": [],
                  "value": "Equal Experts DE ist Teil unseres europäischen Netzwerks.",
                  "nodeType": "text"
                }
              ]
            },
            {
              "content": [
                {
                  "value": "\nWir arbeiten seit 2015 in Deutschland und haben 2018 unseren EU-Hauptsitz hier in Berlin eingerichtet, um unsere Kunden zu unterstützen und unser Netzwerk von internationalen Partnern auszubauen.",
                  "nodeType": "text"
                }
              ]
            }
          ]
        }
      },
      "contactSectionHeading": "Kontakten"
    };

    const officeLocations = [
      {
        "node": {
          "region": "HQ",
          "city": "Berlin",
          "tel": "004915120073771",
          "email": "helloBER@equalexperts.com",
          "linkText": "Karte und mehr info",
          "link": "/contact-us"
        }
      },
      {
        "node": {
          "region": "Süd",
          "city": "München",
          "tel": "004915120073771",
          "email": "helloMUC@equalexperts.com",
          "linkText": "Karte und mehr info",
          "link": "/contact-us"
        }
      },
      {
        "node": {
          "region": "West",
          "city": "Köln",
          "tel": "004915120073771",
          "email": "helloCGN@equalexperts.com",
          "linkText": "Karte und mehr info",
          "link": "/contact-us"
        }
      }
    ];

    return (
      <div className={`main-container`}>
        <ContactsLayout 
            contactCopy={contactCopy} 
            officeLocations={officeLocations} 
        />
      </div>
    )
  }
}

export default IndexPage
