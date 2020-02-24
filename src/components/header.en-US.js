import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";
import HeaderLayout from "./header_layout";

const HeaderDe = () => {
    const dataQuery = useStaticQuery(graphql`
        query headerEn {
          allContentfulHeaderMenu(filter: {node_locale: {eq: "en-US"}}){
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
      <Link to="/en-US/customers/" key={'blogNavItem1'} className={`header__navigation-link`}>Customers</Link>,
      <Link to="/events/" key={'blogNavItem6'} className={`header__navigation-link`}>Events</Link>,
      <Link to="/en-US/career/" key={'blogNavItem2'} className={`header__navigation-link`}>Career</Link>,
      <Link to="/en-US/blogs-list/" key={'blogNavItem3'} className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.blogLink}</Link>,
      <Link to="/en-US/contact/" key={'blogNavItem4'} className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.contactLink}</Link>
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
