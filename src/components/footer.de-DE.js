import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";
import FooterLayout from "./footer_layout";

const FooterDe = () => {
    const dataQuery = useStaticQuery(graphql`
        query footerDe {
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
    const switcherLinks = langsMenu.map((lang, i) => {
        let separatorClass = i < langsMenu.length-1 ? "header__lang-switcher__separator" : null;
        return (
            <li className={separatorClass}>
                <Link to={lang.link} key={lang.langKey}>
                  <span selected={lang.selected}>
                      {lang.langKey === 'de'?'DE':'EN'}
                  </span>
                </Link>
            </li>
              )
          }
  );
  const navLinks = [
    <Link to="/de/blogs-list/" className={`footer__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.blogLink}</Link>,
    <Link to="/de/contact/" className={`footer__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.contactLink}</Link>
  ];
  const legalLinks = [
    <li class="legal-navigation__item"><a href="/privacy-notice">Privacy notice</a></li>,
    <li class="legal-navigation__item"><a href="/modern-slavery-policy">Modern Slavery policy</a></li>,
    <li class="legal-navigation__item"><a href="/brand">Brand resources</a></li>,
  ];

  return (
    <FooterLayout
      navLinks={navLinks}
      switcherLinks={switcherLinks}
      legalLinks={legalLinks}
    >
    </FooterLayout>
  );
}

export default FooterDe
