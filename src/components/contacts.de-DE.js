import {graphql, useStaticQuery} from "gatsby"
import React from "react";
import ContactsLayout from "./contacts_layout";

const Contact = (props) => {
    const dataQuery = useStaticQuery(graphql`
    query ContactsQueryDe {
        allContentfulContactModule(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    contactIntroductionTitle
                    contactIntroduction {
                        json
                    }
                    contactSectionHeading
                    contactBackgroundImage {
                        title
                        description
                        file {
                            url
                        }
                    }
                }
            }
        }
        allContentfulOfficeLocation(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    region
                    city
                    tel
                    email
                    linkText
                    link
                }
            }
        }
    }
    `);
    return ( 
        <ContactsLayout 
            contactCopy={dataQuery.allContentfulContactModule.edges[0].node} 
            officeLocations={dataQuery.allContentfulOfficeLocation.edges.reverse()} 
        />
    );
}


export default Contact