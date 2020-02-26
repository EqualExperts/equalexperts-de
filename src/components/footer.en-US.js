import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import FooterLayout from "./footer_layout";

const FooterUS = () => {
    const dataQuery = useStaticQuery(graphql`
        query footerUS {
          allContentfulMainNav(filter: {node_locale: {eq: "en-US"}}){
            edges {
              node {
                navItems {
                  navItemText
                  navItemUrl
                }
              }
            }
          }
          allContentfulLegalNav(filter: {node_locale: {eq: "en-US"}}){
            edges {
              node {
                navItems {
                  navItemText
                  navItemUrl
                }
              }
            }
          }
        }
      `);

    return (
      <FooterLayout
            navLinks={dataQuery.allContentfulMainNav.edges[0].node.navItems}
            legalLinks={dataQuery.allContentfulLegalNav.edges[0].node.navItems}
      >
      </FooterLayout>
    );
}

export default FooterUS
