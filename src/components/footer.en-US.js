import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import FooterLayout from "./footer_layout";
import {getCurrentLangKey} from "ptz-i18n";

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
      let homeLink = (langKey === defaultLangKey) ? '' : `/${langKey}/`;
    return (
      <FooterLayout
            homeLink={homeLink}
            navLinks={dataQuery.allContentfulMainNav.edges[0].node.navItems}
            legalLinks={dataQuery.allContentfulLegalNav.edges[0].node.navItems}
            switcherLinks={langs}
      >
      </FooterLayout>
    );
}

export default FooterUS
