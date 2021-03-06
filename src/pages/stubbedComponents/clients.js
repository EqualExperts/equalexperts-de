import React from "react"
import ClientsLayout from "../../components/clients_layout"
import "../../styles/index.scss"

const clientsData = [
  {
    title: "Siemens Healthineers",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/7CYphA6Ayq4oquOggPvpCy/ba021ac9eefea6d5ce64d176b2ab71dd/Siemens_Healthineers.png",
    },
  },
  {
    title: "Springer",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/3jju9kB01bdQZ48Wd2ZbSB/2980a6af0008b6a97e0df82d2ad1103f/Springer-300x83.png",
    },
  },
  {
    title: "Telefonica",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/2S3uC3qb5bOJKJe5VLvvLt/baddcd5954d240aa6877c8344c135efd/Telefonica-300x89.png",
    },
  },
  {
    title: "Klarna",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/4JUqXdyJytAO0lxQjRhSm7/99f23ceefe2dd6a67508cc9873f4d147/Klarna-300x81-V2-300x81.png",
    },
  },
  {
    title: "UBS",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/43956CkogXe31wo1yCZKc7/75e87a4b6b1c09503f5bb4f2a91287a0/UBS-300x92.png",
    },
  },
  {
    title: "Santander",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/1VbKviF1ciy9Pryz2xP73A/7452dc330eccf0e0de49a2c7bf51b755/Santander.png",
    },
  },
  {
    title: "Visa",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/2P0i7gWn8v9NrlaMnbFRcw/204392723f4b437b4bf1db31f7eef0b2/Visa-300x67.png",
    },
  },
  {
    title: "American Express",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/70WxVGE2qfy3rCwCE5UIU9/8477726dd56529df15b2815f43505185/Amex-300x154.png",
    },
  },
  {
    title: "Barclays",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/7Bm5253ZfS2Am01Gth1okP/43f26f189d59bfe3715c541de26cf803/Barclays-300x61.png",
    },
  },
  {
    title: "Sainsburys",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/4mV8AJ5J0psvgVby3byPS1/db9c666d7b7c1ef2fc7db52731c52fe4/Sainsburys.png",
    },
  },
  {
    title: "Tesco",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/7a1nBz9DeBk4aRL4U170ou/87d70ebe070013789b161caeabafb7ea/Tesco-300x78.png",
    },
  },
  {
    title: "Lloyds Pharmacists",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/3lMcFr8S3T4IpuyEmNR72h/86ffc1b8ffc0e033cf1b540062a15606/Lloyds_Pharmacy.png",
    },
  },
  {
    title: "The Economist",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/72Z4tybF8tE4jXsZLrlGtx/419b8923f907fc24a416f0c6d6b57247/The_Economist-e1562592666642.png",
    },
  },
  {
    title: "ITV",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/7B5lkfsvWd0If9Ev3nCS55/570d960f082ac9b3ca47b545ee8402c0/itv-300x81.png",
    },
  },
  {
    title: "BBC",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/5sGVlswqvJGmG1UlReQFS0/b02ae38c03c1e0a8be66a42f4399b107/BBC-300x81.png",
    },
  },
  {
    title: "Compare the market",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/4ehvywzRij6lY44e2eeMMO/aaac8f27d9f194a11451d2fd4ec54168/Compare-the-Market-300x40.png",
    },
  },
  {
    title: "Shop Direct",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/PXruTmRrTyLXnmEatRghQ/67143f910fb67cc0bc33be9ee71c7133/Shop_Direct.png",
    },
  },
  {
    title: "MeetUp",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/51i3pQULh4paCk5h02AIMW/d9d44ec9fead51b7bf2bab4c48250db8/MeetUp.png",
    },
  },
  {
    title: "GOV.UK",
    description: "",
    file: {
      url:
        "//images.ctfassets.net/2mx9j3gfirje/01nXjMdgMaqmLeyOcATF5B/3d416c614bf059ab823e547f8e8d9f6f/Gov.UK_-300x54.png",
    },
  },
]

class IndexPage extends React.Component {
  render() {
    return (
      <div className={`main-container`}>
        <ClientsLayout clientData={clientsData} title={"Unser Kunden"} />
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
