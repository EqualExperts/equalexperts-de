import {graphql, useStaticQuery} from "gatsby"
import React from "react";
import RolesLayout from "./roles_layout";

const Contact = (props) => {
    const dataQuery = useStaticQuery(graphql`
    query RolesQueryUS {
        allContentfulRolesIntro(filter: {node_locale: {eq: "en-US"}}) {
            edges {
                node {
                    rolesTitle
                    rolesIntroduction {
                        json
                    }
                }
            }
        }
        allContentfulRole(filter: {node_locale: {eq: "en-US"}}) {
            edges {
                node {
                    roleTitle
                    roleSummary {
                        json
                    }
                }
            }
        }
    }
    `);
    return ( 
        <RolesLayout 
             rolesIntroContent={dataQuery.allContentfulRolesIntro.edges[0].node}
             roles={dataQuery.allContentfulRole.edges}
        />
    );
}


export default Contact