import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react";
import ClientsLayout from "./clients_layout";

const clientData = [
    {
        name : "Jio",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/08/Jio-300x121.png"
    },
    {
        name : "ONS",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/ONS.png"
    },
    {
        name : "NBC",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/NBC-e1562592650761.png"
    },
    {
        name : "Tesco Mobile",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Tesco_Mobile.png"
    },
    {
        name : "Shop Direct",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Shop_Direct.png"
    },
    {
        name : "Sainsburys",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Sainsburys.png"
    },
    {
        name : "MeetUp",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/MeetUp.png"
    },
    {
        name : "Lloyds Pharmacy",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Lloyds_Pharmacy.png"
    },
    {
        name : "Siemens Healthineers",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Siemens_Healthineers.png"
    },
    {
        name : "The Economist",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/The_Economist-e1562592666642.png"
    },
    {
        name : "Sky_Bet",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Sky_Bet_-e1562592683365.png"
    },
    {
        name : "HMPO",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/HMPO.png"
    },
    {
        name : "Border Force",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Border_Force-e1562586725548.png"
    },
    {
        name : "Thames Water",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Thames_Water_-e1562592736456.png"
    },
    {
        name : "ZOPA",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/ZOPA.png"
    },
    {
        name : "Santander",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/Santander.png"
    },
    {
        name : "itv",
        url : "https://www.equalexperts.com/wp-content/uploads/2019/07/itv-300x81.png"
    },
    {
        name : "GOV.UK",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Gov.UK_-300x54.png"
    },
    {
        name : "Legal General",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Legal-General-300x153.png"
    },
    {
        name : "Companies House",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Companies-House-300x96.png"
    },
    {
        name : "Experian",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Experian-300x114.png"
    },
    {
        name : "UBS",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/UBS-300x92.png"
    },
    {
        name : "Fidelity",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Fidelity-300x74.png"
    },
    {
        name : "Vocalink",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Vocalink-300x70.png"
    },
    {
        name : "Rightmove",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Rightmove-300x97.png"
    },
    {
        name : "Bookatable",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Bookatable-300x67.png"
    },
    {
        name : "Telefonica",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Telefonica-300x89.png"
    },
    {
        name : "Tesco",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Tesco-300x78.png"
    },
    {
        name : "Klarna",
        url : "https://www.equalexperts.com/wp-content/uploads/2018/02/Klarna-300x81-V2-300x81.png"
    },
    {
        name : "Springer",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Springer-300x83.png"
    },
    {
        name : "M&amp;S",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/MS-300x114.png"
    },
    {
        name : "BBC",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/BBC-300x81.png"
    },
    {
        name : "LMAX",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Lmax-300x81.png"
    },
    {
        name : "Compare The Market",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Compare-the-Market-300x40.png"
    },
    {
        name : "Barclays",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Barclays-300x61.png"
    },
    {
        name : "Barclaycard",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Barclaycard-300x73.png"
    },
    {
        name : "Visa",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Visa-300x67.png"
    },
    {
        name : "Tesco Bank",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Tesco-Bank-300x67.png"
    },
    {
        name : "American Express",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Amex-300x154.png"
    },
    {
        name : "BGL Group",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/bglgroup-300x133.png"
    },
    {
        name : "Informa",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/Informa-300x67.png"
    },
    {
        name : "TUI",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/TUI-300x111.png"
    },
    {
        name : "WEVE",
        url : "https://www.equalexperts.com/wp-content/uploads/2016/10/WEVE2-30-300x93.png"
    }
];

const Clients = (props) => {
    const dataQuery = useStaticQuery(graphql`
    query ClientsQueryUS {
        allContentfulClientsModule(filter: {node_locale: {eq: "en-US"}}) {
        edges {
          node {
            title
          }
        }
      }
    }
    `);
    return ( 
        <ClientsLayout clientData={clientData} title={dataQuery.allContentfulClientsModule.edges[0].node.title}/>
    );
}


export default Clients
