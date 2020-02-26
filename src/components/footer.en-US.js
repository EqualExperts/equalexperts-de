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

    const legalLinks = [
      <li className="legal-navigation__item" key={'legalNavItem1'}><a href="/privacy-notice">Privacy notice</a></li>,
      <li className="legal-navigation__item" key={'legalNavItem2'}><a href="/modern-slavery-policy">Modern Slavery policy</a></li>,
      <li className="legal-navigation__item" key={'legalNavItem3'}><a href="/brand">Brand resources</a></li>,
    ];

    return (
      <FooterLayout
            navLinks={dataQuery.allContentfulMainNav.edges[0].node.navItems}
            legalLinks={legalLinks}
      >
      </FooterLayout>
    );
}

export default FooterUS
