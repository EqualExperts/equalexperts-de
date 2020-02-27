import {graphql, useStaticQuery} from "gatsby"
import React from "react"
import FooterLayout from "./footer_layout";
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";

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
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));
  return (
    <FooterLayout
      navLinks={dataQuery.allContentfulMainNav.edges[0].node.navItems}
      legalLinks={dataQuery.allContentfulLegalNav.edges[0].node.navItems}
      switcherLinks={langsMenu}
    >
    </FooterLayout>
  );
}

export default FooterDe
