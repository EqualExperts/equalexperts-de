import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import FooterLayout from "./footer_layout";

const FooterDe = () => {
  const dataQuery = useStaticQuery(graphql`
      query footerDe {
        allContentfulMainNav(filter: {node_locale: {eq: "de"}}){
          edges {
            node {
              navItems {
                navItemText
                navItemUrl
              }
            }
          }
        }
        allContentfulLegalNav(filter: {node_locale: {eq: "de"}}){
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

export default FooterDe
