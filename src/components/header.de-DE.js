import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";
import HeaderLayout from "./header_layout";

const HeaderDe = () => {
    const dataQuery = useStaticQuery(graphql`
        query headerDe {
          allContentfulHeaderMenu(filter: {node_locale: {eq: "de"}}){
            edges {
              node {
                contactLink
                blogLink
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
    const navLinks = [
      <Link to="/kunde/" key={'blogNavItem1'} className={`header__navigation-link`}>Kunde</Link>,
      <Link to="/events/" key={'blogNavItem5'} className={`header__navigation-link`}>Veranstaltungen</Link>,
      <Link to="/karrier/" key={'blogNavItem2'} className={`header__navigation-link`}>Karrier</Link>,
      <Link to="/blogs-list/" key={'blogNavItem3'} className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.blogLink}</Link>,
      <Link to="/contact/" key={'blogNavItem4'} className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.contactLink}</Link>
    ];

  return (
    <HeaderLayout
      navLinks={navLinks}
      switcherLinks={langsMenu}
    >
    </HeaderLayout>
  );
}

export default HeaderDe
