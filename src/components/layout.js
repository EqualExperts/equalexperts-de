import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import Header from "./header"
import Footer from "./footer";

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
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
  `)
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const homeLink = `/${langKey}/`;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <div className={`main-container`}>
      <Header siteTitle={data.site.siteMetadata.title} langs={langsMenu} />
      <article className={`content`}>
        <main>{children}</main>
      </article>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
}

export default Layout
