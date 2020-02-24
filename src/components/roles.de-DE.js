import {graphql, useStaticQuery} from "gatsby"
import React from "react";
import RolesLayout from "./roles_layout";

const RolesDe = (props) => {
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
    return ( 
        <RolesLayout 
             rolesIntroContent={dataQuery.allContentfulRolesIntro.edges[0].node}
             roles={dataQuery.allContentfulRole.edges}
        />
    );
}


export default RolesDe