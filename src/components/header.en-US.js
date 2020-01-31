import {graphql, Link, useStaticQuery} from "gatsby"
import React from "react"
import image from '../images/logo.svg'
import {getCurrentLangKey, getLangs, getUrlForLang} from "ptz-i18n";

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
    const links = langsMenu.map((lang) => {
            return (
                <li>
                    <Link to={lang.link} key={lang.langKey}>
                      <span selected={lang.selected}>
                         {lang.langKey === 'de'?'German':'English'}
                      </span>
                    </Link>
                </li>
            )
        }
    );

    return (
        <header className={`header`}>
            <div className={`header__content-wrapper`}>
                <Link to={'/'}>
                    <img className={`header__logo`} src={image} alt={`Equal Experts logo`} />
                </Link>
                <nav className={`header__navigation`}>
                    <Link to="/en-US/blogs-list/" className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.blogLink}</Link>
                    <Link to="/en-US/contact/" className={`header__navigation-link`}>{dataQuery.allContentfulHeaderMenu.edges[0].node.contactLink}</Link>
                </nav>
                <div className={`header__lang-switcher`}>
                    <ul>
                        {links}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default HeaderDe
