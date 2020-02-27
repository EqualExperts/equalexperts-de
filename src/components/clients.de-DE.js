import {graphql, useStaticQuery} from "gatsby"
import React from "react";
import ClientsLayout from "./clients_layout";

const Clients = (props) => {
    const dataQuery = useStaticQuery(graphql`
    query ClientsQueryDe {
        allContentfulClientsModule(filter: {node_locale: {eq: "de"}}) {
        edges {
          node {
            title
            logos {
                title
                description
                file {
                    url
                }
            }
          }
        }
      }
    }
    `);
    return ( 
        <ClientsLayout clientData={dataQuery.allContentfulClientsModule.edges[0].node.logos} title={dataQuery.allContentfulClientsModule.edges[0].node.title}/>
    );
}


export default Clients