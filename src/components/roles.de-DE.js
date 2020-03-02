import {graphql, useStaticQuery} from "gatsby"
import React from "react";
import RolesLayout from "./roles_layout";
import {getCurrentLangKey} from "ptz-i18n";

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
                        roleLink
                        roleSummary {
                            json
                        }
                        roleImage {
                            file {
                                fileName
                                url
                            }
                        }
                    }
                }
            }
            site {
                siteMetadata {
                  title,
                  description,
                  languages {
                    defaultLangKey
                    langs
                  }
                }
              }
        }
    `);
    const url = typeof window !== 'undefined' ? window.location.pathname : '';
    const { langs, defaultLangKey } = dataQuery.site.siteMetadata.languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    let homeLink = (langKey === defaultLangKey) ? '/' : `/${langKey}/`;
    return ( 
        <RolesLayout
            homeLink={homeLink}
            rolesIntroContent={dataQuery.allContentfulRolesIntro.edges[0].node}
            roles={dataQuery.allContentfulRole.edges}
        />
    );
}


export default RolesDe