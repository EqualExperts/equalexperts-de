import {graphql, useStaticQuery} from "gatsby"
import React from "react";
import RolesLayout from "./roles_layout";

const Contact = (props) => {
    const dataQuery = useStaticQuery(graphql`
        query RolesQueryDe {
            allContentfulRolesIntro(filter: {node_locale: {eq: "de"}}) {
                edges {
                    node {
                        rolesTitle
                        rolesIntroduction {
                            json
                        }
                    }
                }
            }
            allContentfulRole(filter: {node_locale: {eq: "de"}}) {
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
    console.log(dataQuery.allContentfulRole.edges);
    return ( 
        <RolesLayout 
             rolesIntroContent={dataQuery.allContentfulRolesIntro.edges[0].node}
             roles={dataQuery.allContentfulRole.edges}
        />
    );
}


export default Contact